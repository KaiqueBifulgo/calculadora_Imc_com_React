import './Button.css'

import propTypes from "prop-types"



const Button = ({id, text}) => {
  return <button id={id}> {text} </button>
  
}

Button.propTypes = {
    id: propTypes.string,
    text: propTypes.string
}


export default Button