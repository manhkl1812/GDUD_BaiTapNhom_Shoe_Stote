import { Link } from "react-router-dom";

function fmtPrice(value) {
  return Number(value || 0).toLocaleString("vi-VN") + "đ";
}

function fmtDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function ProfileLayout({
  customer,
  orders,
  totalSpent,
  lastOrder,
  activeTab,
  onTabChange,
  onEditAddress,
  onLogout,
}) {
  const metrics = [
    { label: "Đơn hàng", value: orders.length },
    { label: "Đã chi tiêu", value: fmtPrice(totalSpent) },
    {
      label: "Đơn gần nhất",
      value: lastOrder ? fmtDate(lastOrder.createdAt) : "Chưa có",
    },
    { label: "Mức thành viên", value: orders.length >= 3 ? "VIP" : "Standard" },
  ];

  return (
    <div style={s.page}>
      <div style={s.container}>
        <section style={s.heroCard}>
          <div style={s.heroLeft}>
            <div style={s.avatarRing}>
              <img src={customer.avatar} alt={customer.name} style={s.avatar} />
            </div>
            <div>
              <div style={s.kicker}>Tài khoản khách hàng</div>
              <h1 style={s.name}>{customer.username || customer.name}</h1>
              <div style={s.metaRow}>
                <span>{customer.name || customer.username}</span>
                <span>•</span>
                <span>{customer.email}</span>
                <span>•</span>
                <span>{customer.phone}</span>
              </div>
            </div>
          </div>
          <div style={s.heroActions}>
            <button style={s.primaryBtn} onClick={onEditAddress}>
              Chỉnh sửa địa chỉ
            </button>
            <Link to="/gio-hang" style={s.secondaryLink}>
              Xem giỏ hàng
            </Link>
          </div>
        </section>

        <section style={s.metricGrid}>
          {metrics.map((metric) => (
            <article key={metric.label} style={s.metricCard}>
              <div style={s.metricLabel}>{metric.label}</div>
              <div style={s.metricValue}>{metric.value}</div>
            </article>
          ))}
        </section>

        <section style={s.contentGrid}>
          <aside style={s.sidebar}>
            {[
              ["orders", "Lịch sử đặt hàng"],
              ["address", "Địa chỉ giao hàng"],
              ["account", "Thông tin tài khoản"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => onTabChange?.(key)}
                style={{
                  ...s.sideItem,
                  ...(activeTab === key ? s.sideItemActive : {}),
                }}
              >
                {label}
              </button>
            ))}

            <div style={s.sidebarFooter}>
              <button style={s.sideLogoutBtn} onClick={onLogout}>
                Đăng xuất
              </button>
            </div>
          </aside>

          <div style={s.mainPanel}>
            {activeTab === "orders" && (
              <div>
                <div style={s.sectionHeader}>
                  <div>
                    <h2 style={s.sectionTitle}>Lịch sử đặt hàng</h2>
                    <p style={s.sectionDesc}>
                      Các đơn gần nhất được lưu tự động sau khi thanh toán.
                    </p>
                  </div>
                </div>

                {orders.length === 0 ? (
                  <div style={s.emptyState}>
                    <div style={{ fontSize: 42 }}>📦</div>
                    <p>Bạn chưa có đơn hàng nào.</p>
                    <Link to="/cua-hang" style={s.emptyLink}>
                      Đi mua sắm ngay
                    </Link>
                  </div>
                ) : (
                  <div style={s.orderList}>
                    {orders.map((order) => (
                      <article key={order.id} style={s.orderCard}>
                        <div style={s.orderHead}>
                          <div>
                            <div style={s.orderId}>{order.id}</div>
                            <div style={s.orderDate}>
                              {fmtDate(order.createdAt)}
                            </div>
                          </div>
                          <span style={s.orderStatus}>
                            {order.paymentMethod === "bank"
                              ? "Đã thanh toán"
                              : "Chờ xử lý"}
                          </span>
                        </div>

                        <div style={s.orderItems}>
                          {order.items?.map((item) => (
                            <div key={item.cid} style={s.orderItemRow}>
                              <div style={s.orderItemName}>{item.name}</div>
                              <div style={s.orderItemMeta}>
                                Size {item.size || "-"} • SL {item.qty}
                              </div>
                              <div style={s.orderItemPrice}>
                                {fmtPrice(item.price * item.qty)}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div style={s.orderFoot}>
                          <span>
                            Phí ship: {fmtPrice(order.shippingFee || 0)}
                          </span>
                          <strong>Tổng: {fmtPrice(order.total)}</strong>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "address" && (
              <div>
                <div style={s.sectionHeader}>
                  <div>
                    <h2 style={s.sectionTitle}>Địa chỉ giao hàng</h2>
                    <p style={s.sectionDesc}>
                      Cập nhật nhanh thông tin giao hàng để checkout chính xác
                      hơn.
                    </p>
                  </div>
                  <button style={s.primaryBtn} onClick={onEditAddress}>
                    Sửa địa chỉ
                  </button>
                </div>

                <div style={s.infoCard}>
                  <div style={s.infoLine}>
                    <span>Họ tên</span>
                    <strong>{customer.name}</strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Số điện thoại</span>
                    <strong>{customer.phone}</strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Email</span>
                    <strong>{customer.email}</strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Địa chỉ</span>
                    <strong>{customer.address}</strong>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div>
                <div style={s.sectionHeader}>
                  <div>
                    <h2 style={s.sectionTitle}>Thông tin tài khoản</h2>
                    <p style={s.sectionDesc}>
                      Dùng chung cho thanh toán và giao hàng.
                    </p>
                  </div>
                </div>

                <div style={s.infoCard}>
                  <div style={s.infoLine}>
                    <span>Tên đăng nhập</span>
                    <strong>
                      {customer.username || customer.name || "Chưa cập nhật"}
                    </strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Vai trò</span>
                    <strong>{customer.role}</strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Khách hàng</span>
                    <strong>{customer.name || "Chưa cập nhật"}</strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Liên hệ</span>
                    <strong>{customer.phone || "Chưa cập nhật"}</strong>
                  </div>
                  <div style={s.infoLine}>
                    <span>Email</span>
                    <strong>{customer.email || "Chưa cập nhật"}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

const s = {
  page: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background: "#ffffff",
    fontFamily: "'Be Vietnam Pro', sans-serif",
    padding: "32px 0 60px",
  },
  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px",
  },
  heroCard: {
    background: "#ffffff",
    border: "1px solid #eef2f7",
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
    borderRadius: 28,
    padding: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
  },
  heroLeft: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    flexWrap: "wrap",
  },
  avatarRing: {
    width: 104,
    height: 104,
    borderRadius: "50%",
    padding: 4,
    background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
    flexShrink: 0,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    background: "#f8fafc",
  },
  kicker: {
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1.5,
    color: "#64748b",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  name: {
    fontSize: 30,
    fontWeight: 900,
    color: "#111827",
    margin: 0,
    lineHeight: 1.15,
  },
  metaRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    color: "#6b7280",
    marginTop: 10,
    fontSize: 13,
  },
  heroActions: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    border: "none",
    background: "#111827",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 14,
    fontWeight: 800,
    cursor: "pointer",
    textDecoration: "none",
  },
  secondaryLink: {
    textDecoration: "none",
    color: "#111827",
    fontWeight: 800,
    padding: "12px 18px",
    borderRadius: 14,
    background: "#fff",
    border: "1px solid #e5e7eb",
  },
  sidebarFooter: {
    marginTop: 8,
    paddingTop: 10,
    borderTop: "1px solid #eef2f7",
  },
  sideLogoutBtn: {
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#111827",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },
  metricGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 14,
    marginTop: 18,
  },
  metricCard: {
    background: "#ffffff",
    borderRadius: 22,
    padding: 18,
    boxShadow: "0 16px 36px rgba(15, 23, 42, 0.05)",
    border: "1px solid #eef2f7",
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "#6b7280",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  metricValue: { fontSize: 18, fontWeight: 900, color: "#111827" },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "240px minmax(0, 1fr)",
    gap: 18,
    marginTop: 18,
    alignItems: "start",
  },
  sidebar: {
    background: "#ffffff",
    borderRadius: 24,
    padding: 14,
    boxShadow: "0 16px 36px rgba(15, 23, 42, 0.05)",
    border: "1px solid #eef2f7",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  sideItem: {
    border: "none",
    background: "transparent",
    textAlign: "left",
    padding: "14px 14px",
    borderRadius: 16,
    fontSize: 14,
    fontWeight: 700,
    color: "#374151",
    cursor: "pointer",
  },
  sideItemActive: {
    background: "linear-gradient(135deg, #111827 0%, #374151 100%)",
    color: "#fff",
  },
  mainPanel: {
    background: "#ffffff",
    borderRadius: 24,
    padding: 22,
    boxShadow: "0 16px 36px rgba(15, 23, 42, 0.05)",
    border: "1px solid #eef2f7",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
    flexWrap: "wrap",
  },
  sectionTitle: { fontSize: 22, fontWeight: 900, color: "#111827", margin: 0 },
  sectionDesc: { marginTop: 6, fontSize: 13, color: "#6b7280" },
  emptyState: { padding: "42px 12px", textAlign: "center", color: "#6b7280" },
  emptyLink: {
    display: "inline-block",
    marginTop: 14,
    textDecoration: "none",
    color: "#fff",
    background: "#111827",
    padding: "10px 16px",
    borderRadius: 12,
    fontWeight: 800,
  },
  orderList: { display: "flex", flexDirection: "column", gap: 14 },
  orderCard: {
    border: "1px solid #eef2f7",
    borderRadius: 20,
    padding: 18,
    background: "linear-gradient(180deg, #fff 0%, #fcfcfd 100%)",
  },
  orderHead: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "flex-start",
    marginBottom: 14,
    flexWrap: "wrap",
  },
  orderId: { fontWeight: 900, color: "#111827" },
  orderDate: { fontSize: 12, color: "#6b7280", marginTop: 4 },
  orderStatus: {
    fontSize: 12,
    fontWeight: 800,
    color: "#14532d",
    background: "#dcfce7",
    padding: "8px 10px",
    borderRadius: 999,
  },
  orderItems: { display: "flex", flexDirection: "column", gap: 10 },
  orderItemRow: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: 10,
    alignItems: "center",
    padding: "12px 0",
    borderTop: "1px dashed #eef2f7",
  },
  orderItemName: { fontWeight: 700, color: "#111827" },
  orderItemMeta: { fontSize: 12, color: "#6b7280", marginTop: 3 },
  orderItemPrice: { fontWeight: 900, color: "#e11d48" },
  orderFoot: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 14,
    paddingTop: 14,
    borderTop: "1px solid #eef2f7",
    fontSize: 13,
    color: "#374151",
    flexWrap: "wrap",
    gap: 8,
  },
  infoCard: {
    border: "1px solid #eef2f7",
    borderRadius: 18,
    padding: 18,
    background: "#fff",
  },
  infoLine: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    padding: "12px 0",
    borderBottom: "1px solid #f3f4f6",
    flexWrap: "wrap",
  },
};
