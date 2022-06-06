import "./converter.css";
// import CurrencyInput from "./CurrencyInput";
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

  const onAmount1Change = (ev) => {
    setAmount1(ev.target.value);
  };
  const onCurrency1Change = (ev) => {
    setCurrency1(ev.target.value);
  };
  const onAmount2Change = (ev) => {
    setAmount2(ev.target.value);
  };
  const onCurrency2Change = (ev) => {
    setCurrency2(ev.target.value);
  };
  return (
    <div>
      <h3>Convert currency</h3>
      <div className="group">
        <input
          type="text"
          placeholder="amount"
          value={amount1}
          onchange={onAmount1Change}
        />
        <select value={currency1} onchange={onCurrency1Change}>
          {currencies.data?.currencies?.map((currency) => (
            <option value={currency.short}>{currency.short}</option>
          ))}
        </select>
      </div>

      <div className="group">
        <input
          type="text"
          placeholder="amount"
          value={amount2}
          onchange={onAmount2Change}
        />
        <select value={currency2} onchange={onCurrency2Change}>
          {currencies?.data?.currencies.map((currency) => (
            <option value={currency.short}>{currency.short}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Converter;
