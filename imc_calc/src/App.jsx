import { useState } from 'react'

import ImcCalc from './components/ImcCalc'

import { data } from './data/data'

import './App.css'
import ImcTable from './components/ImcTable';

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!weight || !height) return;

    const weightFloat = +weight.replace(".", ",");
    const heightFloat = +height.replace(".", ",");

    const ResultImc = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(ResultImc);
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container"> {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data}/> } </div>
    </>
  )
}

export default App
