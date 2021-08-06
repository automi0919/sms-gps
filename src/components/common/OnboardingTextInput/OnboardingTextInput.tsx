import { useState } from 'react';
import './style.css';
//@ts-ignore
import InputMask from 'react-input-mask';

const OnboardingTextInput = (props: PropsType) => {
  const [value, setValue] = useState(props.value);
  const [placeholder, setPlaceholder] = useState('');
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  const onHandleChange = (e: any) => {
    setValue(e.target.value);
    if (props.onChange) {
      console.log('onHandleChange', e.target.value);
      props.onChange(e.target.value);
    }
  }
  const handleFocus = (e: any) => {
    
  }
  
  return (
    <label className="input">
      <InputMask 
        mask={props.mask}
        className="input__field input-outline"
        type={props.type ? props.type : 'text'}
        onClick={handleClick}
        readOnly={props.readonly || false}
        required={props.required || false}
        value={value} 
        onFocus={handleFocus}
        onChange={onHandleChange}
        placeholder=" " />
      <span className="input__label">{props.placeholder || ''}</span>
    </label>
  )
}

interface PropsType {
  onClick?: () => void;
  type?: "text" | "number" | "email" | undefined;
  readonly?: boolean;
  required?: boolean;
  value: string;
  onChange?: (value: string | number | undefined) => void;
  placeholder?: string;
  mask?: string;
  prefix?: string;
}
export default OnboardingTextInput;
