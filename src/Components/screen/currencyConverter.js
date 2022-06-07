import "./converter.css";
import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";

const Converter = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("NGN");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios.get("https://api.terawork.com/resources").then((response) => {
      setCurrencies(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    if (!!currencies) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [currencies]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(
      format((amount1 * currencies[currency2]) / currencies[currency1])
    );
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(
      format((amount1 * currencies[currency2]) / currencies[currency1])
    );
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(
      format((amount2 * currencies[currency1]) / currencies[currency2])
    );
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(
      format((amount2 * currencies[currency1]) / currencies[currency2])
    );
    setCurrency2(currency2);
  }

  return (
    <div>
      <h3>Convert currency</h3>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={currencies}
        amount={amount1}
        currency={currency1}
      />

      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={currencies}
        amount={amount2}
        currency={currency2}
      />

      {/* <div className="group">
      <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map((currency => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
    </div>  */}
    </div>
  );
};

export default Converter;
