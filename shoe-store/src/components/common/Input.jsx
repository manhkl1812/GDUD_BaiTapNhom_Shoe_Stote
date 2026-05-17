import '../../styles/Input.css';

const Input = ({
    labelTitle,
    placeholder,
    errorTitle,
    width,
    height,
    type = 'text',
    value,
    onChange,
    disabled = false,
    className = '',
    name,
    id,
    ...props
}) => {
    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputStyle = {
        ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
        ...(height && { height: typeof height === 'number' ? `${height}px` : height })
    };

    return (
        <div className={`input-wrapper ${className}`.trim()}>
            {labelTitle && (
                <label htmlFor={inputId} className="input-label">
                    {labelTitle}
                </label>
            )}
            <input
                id={inputId}
                name={name}
                type={type}
                className={`input-control ${errorTitle ? 'input-error' : ''}`}
                style={inputStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...props}
            />
            {errorTitle && (
                <span className="input-error-message">
                    {errorTitle}
                </span>
            )}
        </div>
    )
}

export default Input