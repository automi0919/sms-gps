import './style.css';

const OnboardingInfoBox = (props: PropsType) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  const color1 = props.color || "var(--primary-color)";
  const forground = props.fill ? "white" : color1;
  const background = props.fill ? color1 : "transparent";
  const border_color = color1;
  const Colors = {
    forground,
    background,
    border_color
  }
  return (
    <div
      className={props.fill ? 'info-onboarding info-fill': 'info-onboarding info-outline'}
      onClick={handleClick}
      style={{width: props.width, paddingTop: props.padding, paddingBottom: props.padding, 
        background: background, color: forground, borderColor: border_color 
      }}
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
  color?: string;
}
export default OnboardingInfoBox;
