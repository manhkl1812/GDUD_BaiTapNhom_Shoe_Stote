import '../../styles/Button.css'

const Button = ({
    title = 'Button',
    variant = 'dark', // 'dark' hoặc 'light'
    width,
    height,
    image,
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    ...props
}) => {
    const buttonClass = `button-control button-${variant} ${className}`.trim();

    const buttonStyle = {
        ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
        ...(height && { height: typeof height === 'number' ? `${height}px` : height })
    };

    return (
        <button
            className={buttonClass}
            style={buttonStyle}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {image && (
                <img
                    src={image}
                    alt=""
                    className="button-icon"
                />
            )}
            {title}
        </button>
    )
}

export default Button