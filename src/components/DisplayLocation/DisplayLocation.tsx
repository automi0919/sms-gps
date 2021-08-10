import './DisplayLocation.css'
import { useDispatch, useSelector } from 'react-redux';
import { approvedData, currentGeoLocation, getCurrentState, getRequestState } from '../../store/sms/reducer';
import Panel from '../Panel/Panel';
import OnboardingInfoBox from '../common/OnboardingInfoBox/OnboardingInfoBox';
import OnboardingButton from '../common/OnboardingButton/OnboardingButton';
import { CURRENT_STATE, getCurrentGeoLocation, REQUEST_STATE, sendLocation, setApprovedPos } from '../../store/sms/actions';
import { useEffect, useState } from 'react';
import Map from '../Map/Map';
import AllowSendLocationModal from '../Modals/AllowSendLocationModal';

interface Pos {
  lat: any,
  lng: any,
  what3words: any,
};

const getType = (urlParams: URLSearchParams): string => {
  const id = urlParams.get('id');
  const lat = urlParams.get('lat');
  const lng = urlParams.get('lng');

  let type = 'CURRENT';
  if (id) {
    type = 'CURRENT';
  } else if (lat && lng) {
    type = 'SHARED';
  } else {
    type = 'APPROVED';
  }
  return type;
}

function DisplayLocation(props: any) {
  const dispatch = useDispatch();
  const current_state = useSelector(state => getCurrentState(state));
  const current_pos = useSelector(state => currentGeoLocation(state));
  const approvedPosData = useSelector(state => approvedData(state));

  const [modalShow, setModalShow] = useState(false);
  const [allowApprove, setAllowApprove] = useState(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get('id');
  const lat = urlParams.get('lat');
  const lng = urlParams.get('lng');
  var phonenumber = urlParams.get('phonenumber');
  const what3words = urlParams.get('what3words');

  const type = getType(urlParams);
  var pos: Pos = {lat: '', lng: '', what3words: ''};

  const triggerModal = () => {
    setModalShow(true);
  }
  switch (type) {
    case 'CURRENT':
      pos = current_pos;
      break;
    case 'SHARED':
      pos = {lat, lng, what3words}; 
      props.handleNotification('info', 'You have shared location');
      break;
    case 'APPROVED':
      pos = approvedPosData?.approvedPos;
      phonenumber = approvedPosData?.phonenumber;
      props.handleNotification('info', 'Your request has been approved!');
      break;
  }
  console.log('current approvedPosData: ', approvedPosData);
  console.log('current location: ', pos)

  useEffect(() => {
    if (type === 'CURRENT') {
      dispatch(getCurrentGeoLocation());
      triggerModal();
    }
  }, []);

  const openGoogleMap = () => {
    let coordinates = `${pos?.lat},${pos?.lng}`;
    let url = `https://www.google.com.sa/maps/search/${coordinates}?hl=en`;
    window.open(url, '_blank');
  }

  const openWhat3Words = () => {
    let url = `https://what3words.com/${pos?.what3words}`
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
    let textToCopy = `latitude: ${pos?.lat}, longitude: ${pos?.lng}`;
    navigator.clipboard.writeText(textToCopy);
    if (props.handleNotification) {
      props.handleNotification("success", `GPS position copied!`, `${textToCopy}`);
    }
  }

  const copyWhat3words = () => {
    let textToCopy = `${pos?.what3words}`;
    navigator.clipboard.writeText(textToCopy);
    if (props.handleNotification) {
      props.handleNotification("success", `What3words copied!`, `${textToCopy}`);
    }
  }

  const onAllow = () => {
    pos = current_pos;
    props.handleNotification('info', 'Your position has been sent!');
    dispatch(sendLocation(pos, id));
    setModalShow(false);
  }

  return (
    <Panel logoSize="60px">
      <div className='display-container'>
        <OnboardingInfoBox  fill={true} width="70%" padding={"5px"}>
          <span style={{fontSize: "12px"}}>
            {id ? 'YOU SHARED YOUR LOCATION' : `${phonenumber} HAS SHARED THEIR LOCATION`}
          </span>
        </OnboardingInfoBox>
        <div className="detail-wrapper">
          <OnboardingInfoBox onClick={copyGeoPos}>
            <div className="info">
              <span className="info-title">GPS LOCATION - TAP TO COPY</span>
              <span className='info-detail'>{pos?.lng}</span>
              <span className='info-detail'>{pos?.lat}</span>
            </div>
          </OnboardingInfoBox>
          <OnboardingInfoBox onClick={copyWhat3words}>
            <div className="info">
              <span className="info-title">WHAT3WORDS LOCATION - TAP TO COPY</span>
              <span className='info-detail'>{'///' + pos?.what3words}</span>
            </div>
          </OnboardingInfoBox>
          <div className="mini-map-container">
            <Map location={pos} zoomLevel={14} points={[pos]} />
          </div>
          <OnboardingButton type="button" fill={true} onClick={openGoogleMap}>
            open in google maps
          </OnboardingButton>
          <OnboardingButton type="button" fill={true} onClick={openWhat3Words}>
            open in what3words
          </OnboardingButton>
          <OnboardingButton type="button" fill={true} onClick={shareLocation}>
            call emergency services
          </OnboardingButton>
        </div>
      </div>
      <AllowSendLocationModal
        show={modalShow}
        onOK={onAllow}
        onHide={() => setModalShow(false)}
      />
    </Panel>
  )
}

export default DisplayLocation
