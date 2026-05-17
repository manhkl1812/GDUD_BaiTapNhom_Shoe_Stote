import { hashPassword } from "../utils/password";

const users = [
  {
    id: "user_001",
    username: "viet29105",
    passwordHash: hashPassword("123456"),
    name: "Nguyễn Trần Quốc Việt",
    phone: "0908424069",
    email: "vietnguyen29105@gmail.com",
    address: "12 Nguyễn Văn Bảo, P.Hạnh Thắng, Tp.HCM",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "customer",
  },
  {
    id: "user_002",
    username: "minhchau",
    passwordHash: hashPassword("123456"),
    name: "Trần Thị Minh Châu",
    phone: "0912345678",
    email: "minchau.tran@gmail.com",
    address: "45 Lê Lợi, P.Bến Nghé, Q.1, Tp.HCM",
    avatar: "https://i.pravatar.cc/150?img=5",
    role: "customer",
  },
  {
    id: "user_003",
    username: "phucle",
    passwordHash: hashPassword("123456"),
    name: "Lê Hoàng Phúc",
    phone: "0987654321",
    email: "hoangphuc.le@gmail.com",
    address: "88 Nguyễn Huệ, P.Bến Nghé, Q.1, Tp.HCM",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "customer",
  },
];

export const currentUser = users[0];

export default users;
