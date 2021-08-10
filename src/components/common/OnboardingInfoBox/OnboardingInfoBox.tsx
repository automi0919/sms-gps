import './style.css';

const OnboardingInfoBox = (props: PropsType) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <div
      className={props.fill ? 'info-onboarding info-fill': 'info-onboarding info-outline'}
      onClick={handleClick}
      style={{width: props.width, paddingTop: props.padding, paddingBottom: props.padding}}
    >
      {props.children}
    </div>
  )
}

interface PropsType {
  onClick?: () => void;
  children: any;
  fill?: boolean;
  width?: string;
  padding?: string;
}
export default OnboardingInfoBox;
