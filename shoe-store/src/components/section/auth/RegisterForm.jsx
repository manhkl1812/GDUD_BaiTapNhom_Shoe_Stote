import React, { useContext, useState } from "react";
import { register } from "../../../service/authService";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import { notify } from "../../../utils/notify";
import AuthContext from "../../../context/AuthContext.jsx";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { login: authLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      notify("Vui lòng nhập tên đăng nhập", "error");
      return;
    }

    if (!email.trim()) {
      notify("Vui lòng nhập email", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notify("Email không hợp lệ", "error");
      return;
    }

    if (!password.trim()) {
      notify("Vui lòng nhập mật khẩu", "error");
      return;
    }

    if (password.length < 6) {
      notify("Mật khẩu phải >= 6 ký tự", "error");
      return;
    }

    if (password !== confirmPassword) {
      notify("Mật khẩu nhập lại không khớp", "error");
      return;
    }

    const result = register({
      username,
      email,
      password,
    });

    if (!result.success) {
      notify(result.message, "error");
    } else {
      authLogin({
        username: result.user.username,
        name: result.user.name,
        email: result.user.email,
        avatar: result.user.avatar,
      });
      notify(result.message, "success");

      navigate("/profile");
    }
  };

  return (
    <MainLayout
      props={
        <div className="container d-flex justify-content-center mt-5">
          <div style={{ width: "600px" }}>
            <h2 className="text-center mb-4 fw-bold">Đăng ký</h2>

            <div className="bg-light p-4 rounded">
              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Tên đăng nhập</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Confirm */}
                <div className="mb-4">
                  <label className="form-label">Nhập lại mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {/* Button */}
                <button className="btn btn-dark w-100 mb-3">Đăng ký</button>

                {/* link login */}
                <div className="text-center">
                  <span>Đã có tài khoản? </span>
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => navigate("/dang-nhap")}
                  >
                    Đăng nhập
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default RegisterForm;
