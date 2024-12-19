import './Button.css'

import propTypes from "prop-types"



const Button = ({id, text, action}) => {
  const handleAction = (e) => {
    action(e);
  }

  return <button id={id} onClick={handleAction}> {text} </button>
  
}

Button.propTypes = {
    id: propTypes.string,
    text: propTypes.string,
    action: propTypes.action
}


export default Button