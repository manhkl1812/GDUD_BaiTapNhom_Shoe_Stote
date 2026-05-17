function Checkbox({ label, checked = false, onChange, disabled = false, id }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
