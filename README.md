# Bazaario — Full-Stack E-commerce App

React + Tailwind CSS frontend, Node.js + Express backend. File-based JSON storage — no database installation needed to get started.

## Features
- Product listing, search, category filter, product detail page
- Cart (persisted in browser localStorage)
- User register/login with JWT auth (first registered user becomes admin)
- Checkout flow → creates a real order via the API
- Order history per user
- Admin-only API endpoints to add/edit/delete products

## Project Structure
```
ecommerce-app/
  backend/     -> Express API (port 5000)
  frontend/    -> React + Vite + Tailwind app (port 5173)
```

## 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev        # starts on http://localhost:5000
```
`.env` values:
```
PORT=5000
JWT_SECRET=change_this_to_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

## 2. Frontend Setup
Open a second terminal:
```bash
cd frontend
npm install
cp .env.example .env
npm run dev         # starts on http://localhost:5173
```

Visit **http://localhost:5173** in your browser.

## 3. Try it out
1. Register a new account (Login → Create an account). The **first** account created becomes an `admin`.
2. Browse products, add to cart, and checkout.
3. Check "My Orders" to see placed orders.
4. Admin can manage products via the API directly, e.g.:
   ```bash
   curl -X POST http://localhost:5000/api/products \
     -H "Authorization: Bearer <admin_token>" \
     -H "Content-Type: application/json" \
     -d '{"name":"New Product","category":"Electronics","price":999,"stock":10,"image":"https://picsum.photos/600","description":"Demo product"}'
   ```

## API Reference (backend)
| Method | Route | Auth | Description |
|---|---|---|---|
| POST | /api/auth/register | - | Register new user |
| POST | /api/auth/login | - | Login, returns JWT |
| GET | /api/products | - | List products (supports `?category=` `&search=`) |
| GET | /api/products/:id | - | Get single product |
| POST | /api/products | Admin | Create product |
| PUT | /api/products/:id | Admin | Update product |
| DELETE | /api/products/:id | Admin | Delete product |
| POST | /api/orders | User | Place an order |
| GET | /api/orders/myorders | User | Get logged-in user's orders |
| GET | /api/orders/:id | User/Admin | Get single order |
| GET | /api/orders | Admin | Get all orders |

## Notes / Next Steps
- Data is stored in JSON files under `backend/data/`. For production, swap `backend/utils/db.js` for a real database (MongoDB, PostgreSQL, etc.) — the route files won't need major changes.
- Add payment gateway integration (Razorpay/Stripe) inside `routes/orders.js` for real payments.
- Deploy backend (Render/Railway) and frontend (Vercel/Netlify); set `VITE_API_URL` and `CLIENT_URL` accordingly.
