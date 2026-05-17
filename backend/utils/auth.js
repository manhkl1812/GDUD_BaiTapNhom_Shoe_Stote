import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};
