import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
//@ts-ignore
import styled from 'styled-components';
const OnboardingButton = (props:PropsType) => {
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
  
  const Button = props.type === 'phone' ? styled.a `
    --color-text: ${forground};
    --color-background: ${background};
    --color-border: ${border_color};
  ` : styled.button`
    --color-text: ${forground};
    --color-background: ${background};
    --color-border: ${border_color};
`;
<a href="tel:+1-303-499-7111">+1 (303) 499-7111</a>
  return(
      <>
        <Button 
          type={props.type ? props.type : 'button'}
          href={'tel:000'}
          className={"custom-btn " + (props.fill ? "btn-fill": 'btn-outline')} 
          onClick={handleClick}
          disabled={props.loading}
          style={{height: props.height}}>
            { props.loading  &&  <FontAwesomeIcon icon={faCircleNotch}  size="2x" spin/> }
            { !props.loading && props.children }
        </Button>
      </>
  )
}

interface PropsType {
  fill?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | "phone" | undefined;
  children: any;
  loading?: boolean;
  height?: string;
  color?: string;
}
export default OnboardingButton;
