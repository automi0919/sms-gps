import './DisplayLocation.css'
import { useDispatch, useSelector } from 'react-redux';
import { approvedData, currentGeoLocation, getRequestState } from '../../store/sms/reducer';
import Panel from '../Panel/Panel';
import OnboardingInfoBox from '../common/OnboardingInfoBox/OnboardingInfoBox';
import OnboardingButton from '../common/OnboardingButton/OnboardingButton';
import { getCurrentGeoLocation, REQUEST_STATE, sendLocation, setApprovedPos } from '../../store/sms/actions';
import { useEffect } from 'react';

function DisplayLocation(props: any) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  const lat = urlParams.get('lat');
  const lng = urlParams.get('lng');
  const what3words = urlParams.get('what3words');

  const dispatch = useDispatch();
  const request_state = useSelector(state => getRequestState(state));

  var approvedPos = useSelector(state => approvedData(state));
  var currentPos = useSelector(state => currentGeoLocation(state));
  var sharedPos = { lat, lng, what3words };

  const pos = id ? currentPos : (lat || lng) ? sharedPos : approvedPos;
  useEffect(() => {
    dispatch(getCurrentGeoLocation());
    if (sharedPos.lat) {
      dispatch(setApprovedPos(sharedPos))
    }
    if (id) {
      props.handleNotification('info', 'Your position has been sent!');
    } else {
      if (lat || lng) {
        props.handleNotification('info', 'You have shared location');
      } else {
        if ((request_state === REQUEST_STATE.APPROVED)) {
          props.handleNotification('info', 'Your request has been approved!');
        }
      }
    }
  }, []);

  if (id && pos.lat) {
    dispatch(sendLocation(pos, id));
  }

  const openGoogleMap = () => {
    let coordinates = `${pos.lat},${pos.lng}`;
    let url = `https://www.google.com.sa/maps/search/${coordinates}?hl=en`;
    window.open(url, '_blank');
  }

  const openWhat3Words = () => {
    let url = `https://what3words.com/${pos.what3words}`
    window.open(url, '_blank');
  }

  const shareLocation = async () => {
    const supported = ('contacts' in navigator && 'ContactsManager' in window);
    if (!supported) {
      props.handleNotification('error', 'Sorry. Your device is not supported contacts!');
      return;
    }
    const properties = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = { multiple: true };
    try {
      //@ts-ignore
      const contacts = await navigator.contacts.select(properties, opts);
      handleShare(contacts);
    } catch (ex) {
      props.handleNotification('error', 'Sorry. Unknown error occured');
    }
  }

  const handleShare = (contacts: any) => {

  }

  const copyGeoPos = () => {
    let textToCopy = `latitude: ${pos.lat}, longitude: ${pos.lng}`;
    navigator.clipboard.writeText(textToCopy);
    if (props.handleNotification) {
      props.handleNotification("success", `GPS position copied!`, `${textToCopy}`);
    }
  }

  const copyWhat3words = () => {
    let textToCopy = `${pos.what3words}`;
    navigator.clipboard.writeText(textToCopy);
    if (props.handleNotification) {
      props.handleNotification("success", `What3words copied!`, `${textToCopy}`);
    }
  }

  return (
    <Panel>
      <div className='display-container'>
        <OnboardingInfoBox onClick={copyGeoPos}>
          <div className="info">
            <span className="info-title">GPS LOCATION - TAP TO COPY</span>
            <span className='info-detail'>{pos.lng}</span>
            <span className='info-detail'>{pos.lat}</span>
          </div>
        </OnboardingInfoBox>
        <OnboardingInfoBox onClick={copyWhat3words}>
          <div className="info">
            <span className="info-title">WHAT3WORDS LOCATION - TAP TO COPY</span>
            <span className='info-detail'>{'///' + pos.what3words}</span>
          </div>
        </OnboardingInfoBox>
        <OnboardingButton type="button" fill={true} onClick={openGoogleMap}>
          open in google maps
        </OnboardingButton>
        <OnboardingButton type="button" fill={true} onClick={openWhat3Words}>
          open in what3words
        </OnboardingButton>
        <OnboardingButton type="button" fill={true} onClick={shareLocation}>
          share location
        </OnboardingButton>
      </div>
    </Panel>
  )
}

export default DisplayLocation
