import { useState } from 'react'

import ImcCalc from './components/ImcCalc'

import { data } from './data/data'

import './App.css'
import ImcTable from './components/ImcTable';

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container"> {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable/> } </div>
    </>
  )
}

export default App
