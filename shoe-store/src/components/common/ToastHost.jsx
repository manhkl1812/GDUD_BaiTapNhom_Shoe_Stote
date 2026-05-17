import { useEffect, useState } from "react";

const TYPE_STYLE = {
  success: {
    border: "#b7ebc6",
    background: "linear-gradient(135deg, #ecfdf3 0%, #d1fae5 100%)",
    color: "#14532d",
    dot: "#16a34a",
  },
  error: {
    border: "#fecaca",
    background: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
    color: "#9f1239",
    dot: "#e11d48",
  },
  info: {
    border: "#c7d2fe",
    background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    color: "#1e3a8a",
    dot: "#2563eb",
  },
};

export default function ToastHost() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (event) => {
      const toast = event.detail;
      setToasts((prev) => [...prev, toast]);

      window.setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== toast.id));
      }, 2600);
    };

    window.addEventListener("app:toast", handleToast);
    return () => window.removeEventListener("app:toast", handleToast);
  }, []);

  if (!toasts.length) return null;

  return (
    <>
      <style>{`@keyframes toastSlideIn { from { opacity: 0; transform: translateY(-10px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
      <div style={s.wrap}>
        {toasts.map((toast) => {
          const palette = TYPE_STYLE[toast.type] ?? TYPE_STYLE.info;
          return (
            <div
              key={toast.id}
              style={{
                ...s.toast,
                borderColor: palette.border,
                background: palette.background,
                color: palette.color,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: palette.dot,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  flex: 1,
                  fontSize: 13,
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                {toast.message}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

const s = {
  wrap: {
    position: "fixed",
    top: 20,
    right: 20,
    zIndex: 10000,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 320,
    maxWidth: "calc(100vw - 32px)",
    pointerEvents: "none",
  },
  toast: {
    border: "1px solid transparent",
    borderRadius: 16,
    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
    padding: "14px 16px",
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    animation: "toastSlideIn .25s ease",
    backdropFilter: "blur(10px)",
  },
};
