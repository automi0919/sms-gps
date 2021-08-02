import { useState } from 'react';
import './style.css';

const OnboardingTextInput = (props:PropsType) => {
  const [value, setValue] = useState(props.value);
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  const onHandleChange = (e:any) => {
    setValue(e.target.value);
    if (props.onChange) {
      console.log('onHandleChange', e.target.value);
      props.onChange(e.target.value);
    }
  }
  return(
    <input 
      type={props.type ? props.type : 'text'}
      className='input-outline' 
      onClick={handleClick}
      readOnly={props.readonly || false}
      required={props.required || false}
      value={value}
      onChange={onHandleChange}
      placeholder={props.placeholder || ''}/>
  )
}

interface PropsType {
  onClick?: () => void;
  type?: "text" | "number" | "email" | undefined;
  readonly?: boolean;
  required?: boolean;
  value: string;
  onChange?: (value: string|number|undefined) => void;
  placeholder?: string;
}
export default OnboardingTextInput;
