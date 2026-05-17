# Shoe Store Frontend Project

File info.txt là file initial để khởi tạo repo trên github lúc nào tạo file trong thư mục đó thì cứ xóa không vấn đề.

## Cấu trúc thư mục chính

```
src/
├── assets/
├── components/
├── config/
├── context/
├── data/
├── hooks/
├── pages/
├── routes/
├── service/
├── styles/
└── utils/
```

---

## Giải thích

### assets/

Chứa hình ảnh, icon, font được import trực tiếp trong React.

---

### components/

Chứa các **UI component tái sử dụng**, không xử lý nghiệp vụ chính.
Ví dụ:

- Button, Input, Modal
- Header, Footer
- ProductCard, ProductGallery (hiển thị bộ sưu tập ảnh sản phẩm)

---

### config/

Chứa các file cấu hình dùng chung cho toàn dự án, tránh hard-code.
Ví dụ: cấu hình route, hằng số ứng dụng.

---

### context/

Quản lý **state toàn cục** của ứng dụng bằng Context API.
Ví dụ:

- Giỏ hàng
- Thông tin đăng nhập

---

### data/

Chứa **mock data** để mô phỏng dữ liệu backend.
Ví dụ:

- Danh sách sản phẩm
- Danh mục
- User giả lập

---

### hooks/

Chứa các **custom hook** để tái sử dụng logic.
Ví dụ:

- useCart
- useAuth
- useLocalStorage

---

### pages/

Mỗi folder tương ứng với **một trang (page)** của website.
Page có nhiệm vụ:

- Gọi service
- Lấy dữ liệu
- Kết hợp component để hiển thị

Ví dụ:

- Home
- Products
- ProductDetail
- Cart
- Checkout
- Auth

---

### routes/

Quản lý định tuyến của ứng dụng.
Ví dụ:

- Khai báo các route
- Bảo vệ route cần đăng nhập

---

### service/

Xử lý logic dữ liệu, đóng vai trò **giả backend**.
Service lấy dữ liệu từ `data/` và trả về cho page sử dụng.

---

### styles/

Chứa CSS dùng chung cho toàn bộ project.
Ví dụ:

- reset.css
- global.css
- variables.css

---

### utils/

Chứa các hàm tiện ích dùng chung, không phụ thuộc React.
Ví dụ:

- format giá tiền
- validate form
- hằng số dùng chung

---

## Luồng xử lý cơ bản của ứng dụng

Page  
→ gọi Service để lấy dữ liệu  
→ Service lấy dữ liệu từ data  
→ Page xử lý logic  
→ truyền dữ liệu xuống Component  
→ Component hiển thị giao diện

Context và Hook được sử dụng để chia sẻ state và logic dùng chung giữa các page.

---

## Cú pháp commit chuẩn sẽ sử dụng

- feat → thêm tính năng mới
- fix → sửa bug
- docs → thay đổi tài liệu
- style → format code (không ảnh hưởng logic, ví dụ: prettier, eslint)
- refactor → cải tiến code nhưng không đổi hành vi
- test → thêm/sửa test
- chore → việc lặt vặt (build, config, dependency update)
- perf → tối ưu hiệu năng
- ci → thay đổi cấu hình CI/CD

✅ Ví dụ commit chuẩn

- feat(auth): thêm chức năng đăng nhập bằng Google
- fix(booking): sửa lỗi tính sai tiền khi huỷ phòng
- docs(readme): cập nhật hướng dẫn cài đặt
- style(ui): format code theo eslint
- refactor(order): tách logic xử lý thanh toán ra service riêng
- test(user): thêm unit test cho UserService
- chore(deps): update Spring Boot 3.2.1
