import './App.css';
import { useState } from 'react';

function CurrenyInput({ curreny, value, onChange }) {
  return (
    <div>
      <label>{curreny} : </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(curreny, e.target.value)}
      />
    </div>
  );
}

function App() {
  const exchangeRate = 1353;
  const [currenyRate, setCurrenyRate] = useState({
    krw: 0,
    usd: 0,
  });

  const onChangeCurrenyRate = (curreny, value) => {
    if (curreny === 'KRW') {
      setCurrenyRate({
        krw: value,
        usd: value / exchangeRate,
      });
    } else {
      setCurrenyRate({
        krw: value * exchangeRate,
        usd: value,
      });
    }
  };

  return (
    <>
      <h1>환율 변환기(KRW-USD)</h1>
      <CurrenyInput
        curreny="KRW"
        value={currenyRate.krw}
        onChange={onChangeCurrenyRate}
      />
      <CurrenyInput
        curreny="USD"
        value={currenyRate.usd}
        onChange={onChangeCurrenyRate}
      />
    </>
  );
}

export default App;
