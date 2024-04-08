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

export default CurrenyInput;
