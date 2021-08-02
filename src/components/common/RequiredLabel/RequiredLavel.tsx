
import './style.css'
const RequiredLabel = (props:PropTypes) => {
  return (
    <label className="required">{props.children}</label>
  )
}
interface PropTypes {
  children: string
}
export default RequiredLabel;