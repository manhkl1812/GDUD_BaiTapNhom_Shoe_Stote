// Tham số truyền vào modal sẽ là 1 cái title của cả modal và children <div /> sẽ là nội dung phần body 
// modal cuối cùng là footer sẽ là các button 

function Modal({ isOpen, title, children, footer, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              {title && <h5 className="modal-title">{title}</h5>}
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              />
            </div>

            {/* Body */}
            <div className="modal-body">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="modal-footer">
                {footer}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      />
    </>
  );
}

export default Modal;