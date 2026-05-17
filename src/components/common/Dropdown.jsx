import "../../styles/Dropdown.css";

const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  placeholder = "-- Chọn --",
  id,
  className = "",
}) => {
  return (
    <div className={`dropdown-control ${className}`}>
      {label && (
        <label htmlFor={id} className="dropdown-label">
          {label}
        </label>
      )}

      <select
        id={id}
        className="dropdown-select"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
