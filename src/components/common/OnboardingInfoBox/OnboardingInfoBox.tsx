import './style.css';

const OnboardingInfoBox = (props: PropsType) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <div
      className={props.fill ? 'info info-fill': 'info info-outline'}
      onClick={handleClick}
      style={{width: props.width}}
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
}
export default OnboardingInfoBox;
