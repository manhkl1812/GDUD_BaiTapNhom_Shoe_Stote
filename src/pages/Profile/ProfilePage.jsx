import { useContext, useEffect, useMemo, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import ProfileLayout from "../../components/layout/ProfileLayout";
import EditAddressModal from "../Cart/EditAddressModal";
import {
  getOrderHistory,
  getProfile,
  saveProfile,
} from "../../utils/profileStorage";
import { notify } from "../../utils/notify";
import AuthContext from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { currentAccount, isAuthenticated, logout } = useContext(AuthContext);
  const [customer, setCustomer] = useState(() => getProfile());
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("orders");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/dang-nhap");
      return;
    }
    setCustomer(getProfile());
  }, [isAuthenticated, currentAccount, navigate]);

  const orders = useMemo(() => getOrderHistory(), [currentAccount]);
  const totalSpent = orders.reduce(
    (sum, order) => sum + Number(order.total || 0),
    0,
  );
  const lastOrder = orders[0] ?? null;

  const onSaveCustomer = (nextCustomer) => {
    setCustomer(nextCustomer);
    saveProfile(nextCustomer);
    notify("Đã cập nhật địa chỉ giao hàng", "success");
  };

  const handleLogout = () => {
    logout();
    notify("Đã đăng xuất", "success");
    navigate("/dang-nhap");
  };

  return (
    <MainLayout
      props={
        <ProfileLayout
          customer={customer}
          orders={orders}
          totalSpent={totalSpent}
          lastOrder={lastOrder}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onEditAddress={() => setShowModal(true)}
          onLogout={handleLogout}
        />
      }
    >
      {showModal && (
        <EditAddressModal
          customer={customer}
          onSave={onSaveCustomer}
          onClose={() => setShowModal(false)}
        />
      )}
    </MainLayout>
  );
}
