import PropTypes from "prop-types";
import "./converter.css";

function CurrencyInput(props) {
  return (
    <div>
      <div className="group">
        <input
          type="number"
          placeholder="amount"
          value={props.amount | props.amount.number}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
        />
        <select
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        >
          {props.currencies.data?.currencies?.map((currency) => (
            <option value={currency.short}>{currency.short}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
