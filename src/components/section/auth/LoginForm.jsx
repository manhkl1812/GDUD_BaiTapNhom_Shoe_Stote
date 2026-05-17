import React, { useContext, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../utils/notify";
import { login } from "../../../service/authService";
import AuthContext from "../../../context/AuthContext.jsx";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login: authLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      notify("Vui lòng nhập tên đăng nhập", "error");
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

    const result = login({ username, password });
    if (!result.success) {
      notify(result.message, "error");
      return;
    }

    authLogin({
      username: result.user.username,
      name: result.user.name,
      email: result.user.email,
      avatar: result.user.avatar,
    });
    notify(result.message, "success");
    navigate("/profile");
  };

  return (
    <MainLayout
      props={
        <div className="container d-flex justify-content-center mt-5">
          <div style={{ width: "600px" }}>
            <h2 className="text-center mb-4 fw-bold">Đăng nhập</h2>

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

                {/* Button */}
                <button className="btn btn-dark w-100 mb-3">Đăng nhập</button>

                {/* Link đăng ký */}
                <div className="text-center">
                  <span>Chưa có tài khoản? </span>
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => navigate("/dang-ky")}
                  >
                    Đăng ký
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

export default LoginForm;
