import './style.css';

const OnboardingInfoBox = (props: PropsType) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <div
      className='info-outline'
      onClick={handleClick}
    >
      {props.children}
    </div>
  )
}

interface PropsType {
  onClick?: () => void;
  children: any
}
export default OnboardingInfoBox;
