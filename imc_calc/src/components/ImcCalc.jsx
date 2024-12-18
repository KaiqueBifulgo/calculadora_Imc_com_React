import './ImcCalc.css'

import Button from './Button.jsx'

const ImcCalc = () => {
  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Coloque sua altura" />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Coloque seu peso" />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" />
                <Button id="clear-btn" text="Limpar" />
            </div>
        </form>
    </div>
  )
}

export default ImcCalc