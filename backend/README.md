# Shoe Store Backend API

Node.js + Express + PostgreSQL backend for Shoe Store application.

## Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Setup Database
- Install PostgreSQL
- Create a database: `shoe_store_db`
- Configure in `.env` file

### 3. Environment Variables
Copy `.env.example` to `.env` and update:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=shoe_store_db
DB_USER=postgres
DB_PASSWORD=your_password
PORT=5000
JWT_SECRET=your_secret_key
CORS_ORIGIN=http://localhost:5173
```

### 4. Run Server
```bash
npm run dev      # Development with nodemon
npm start        # Production
```

Server runs on: `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Get profile (requires token)
- `PUT /api/auth/profile` - Update profile (requires token)

### Products
- `GET /api/products` - Get all products (paginated, filterable)
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `POST /api/orders` - Create order (requires token)
- `GET /api/orders/my-orders` - Get user's orders (requires token)
- `GET /api/orders/all-orders` - Get all orders (admin only)
- `GET /api/orders/:id` - Get order by ID (requires token)
- `PUT /api/orders/:id/status` - Update order status (admin only)

### Cart
- `GET /api/cart` - Get user cart (requires token)
- `POST /api/cart/add` - Add item to cart (requires token)
- `POST /api/cart/remove` - Remove item from cart (requires token)
- `PUT /api/cart/update` - Update cart item quantity (requires token)
- `POST /api/cart/clear` - Clear cart (requires token)

## Database Schema

### Users
- id (UUID)
- name, email, passwordHash
- phone, address, city, country, zipCode
- role (customer/admin)

### Products
- id (UUID)
- name, description, price
- category, gender
- size[], color[]
- image, stock, rating

### Orders
- id (UUID)
- userId, status
- totalPrice, items (JSONB)
- shippingAddress, paymentMethod

### Carts
- id (UUID)
- userId, items (JSONB)

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Auth**: JWT + bcryptjs
- **CORS**: Enabled for frontend
