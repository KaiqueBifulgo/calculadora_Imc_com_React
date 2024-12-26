import './ImcTable.css'

import Button from './Button.jsx'

import propTypes from "prop-types"

function ImcTable({data, imc, info, infoClass, resetCalc}) {
  return (
    <div id="result-container">
      <p id="imc-number">Seu imc é: <span className={infoClass}> {imc} </span></p>
      <p id="info-imc">Sua situação: <span className={infoClass}> {info} </span></p>
      <h3>Confira as classificações de imc:</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar pagina" action={resetCalc}/>
    </div>
  )
}

ImcTable.propTypes = {
  data: propTypes.array,
  imc: propTypes.string,
  info: propTypes.string,
  infoClass: propTypes.string,
  resetCalc: propTypes.func
}

export default ImcTable