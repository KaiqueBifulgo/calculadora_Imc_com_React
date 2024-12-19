import { useState } from 'react'

import propTypes from "prop-types"

import './ImcCalc.css'

import Button from './Button.jsx'


const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();

        setHeight("");
        setWeight("");
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    const handleHeigthChange = (e) => {
        const updateValue = validDigits(e.target.value)

        setHeight(updateValue);
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value)

        setWeight(updateValue);
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Coloque sua altura" 
                        onChange={(e) => handleHeigthChange(e)}
                        value={height}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Coloque seu peso" 
                        onChange={(e) => handleWeightChange(e)}
                        value={weight}
                    />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={calcImc} />
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

ImcCalc.propTypes = {
    calcImc: propTypes.func
}

export default ImcCalc