import { useState, useEffect } from "react";
import { notify } from "../../utils/notify";

export default function EditAddressModal({ customer, onSave, onClose }) {
  const [form, setForm] = useState({ ...customer });

  const upd = (field, val) => setForm((prev) => ({ ...prev, [field]: val }));

  const handleSave = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      notify("Vui lòng điền đầy đủ thông tin!", "error");
      return;
    }
    onSave(form);
    onClose();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") handleSave();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [form]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-header"
          style={{
            padding: "18px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #f0f0ee",
          }}
        >
          <h2
            className="modal-title"
            style={{ fontSize: 16, fontWeight: 800, color: "#111" }}
          >
            Chỉnh sửa thông tin giao hàng
          </h2>
          <button
            className="modal-close"
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              color: "#aaa",
              padding: "4px 8px",
              borderRadius: 6,
            }}
          >
            ✕
          </button>
        </div>

        <div
          className="modal-body"
          style={{
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {[
            {
              label: "Họ và tên",
              field: "name",
              type: "text",
              placeholder: "Nhập họ và tên...",
            },
            {
              label: "Số điện thoại",
              field: "phone",
              type: "tel",
              placeholder: "Nhập số điện thoại...",
            },
            {
              label: "Email",
              field: "email",
              type: "email",
              placeholder: "Nhập email...",
            },
            {
              label: "Địa chỉ giao hàng",
              field: "address",
              type: "text",
              placeholder: "Nhập địa chỉ...",
            },
          ].map(({ label, field, type, placeholder }) => (
            <div
              key={field}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <label style={{ fontSize: 12, fontWeight: 600, color: "#666" }}>
                {label}
              </label>
              <input
                className="modal-input"
                type={type}
                value={form[field]}
                placeholder={placeholder}
                onChange={(e) => upd(field, e.target.value)}
                style={{
                  border: "1.5px solid #e0e0e0",
                  borderRadius: 9,
                  padding: "10px 14px",
                  fontFamily: "inherit",
                  fontSize: 14,
                  outline: "none",
                  color: "#111",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}
        </div>

        <div
          className="modal-footer"
          style={{
            padding: "16px 28px",
            display: "flex",
            gap: 10,
            borderTop: "1px solid #f0f0ee",
          }}
        >
          <button
            className="modal-cancel"
            onClick={onClose}
            style={{
              flex: 1,
              background: "#fff",
              color: "#111",
              border: "1.5px solid #ddd",
              borderRadius: 10,
              padding: "12px 0",
              fontFamily: "inherit",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Huỷ
          </button>
          <button
            className="modal-save"
            onClick={handleSave}
            style={{
              flex: 2,
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 0",
              fontFamily: "inherit",
              fontSize: 14,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
