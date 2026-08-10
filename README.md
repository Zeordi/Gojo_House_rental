# Real estate rent and tenant management system

A comprehensive web application designed to bridge the gap between property owners and tenants. This full-stack system facilitates the entire rental lifecycle, from property listing and searching to digital contract signing, real-time communication, and rent management.

## 🚀 Key Features

### For Property Owners
- **Dashboard:** Centralized hub to manage properties and tenants.
- **Property Management:** Post, update, and remove property listings with image uploads.
- **Contract System:** Generate digital rental agreements for specific tenants with custom terms.
- **Rent Tracking:** Monitor active rent details, due dates, and view historical payment records.
- **Communication:** Real-time chat with contacts and managing tenant complaints.

### For Tenants
- **Property Search:** Browse available rentals with filtering options (price, category, location).
- **Agreement Management:** Review and sign rental contracts digitally.
- **Rent Overview:** View current rent details, payment history, and landlord information.
- **Direct Communication:** Real-time chat with property owners and easy complaint submission.
- **Wishlist:** Save interesting properties for later reference.

### General Features
- **Role-Based Authentication:** distinct workflows for Owners and Tenants (Login/Register/Forgot Password).
- **Account Verification:** Email verification system for security.
- **Responsive UI:** Built with Tailwind CSS and Material UI for a modern look on all devices.

## 🛠️ Technology Stack

### Frontend (`/client`)
- **Framework:** React (Vite)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS, Material UI (MUI)
- **Real-time:** Socket.io-client
- **Routing:** React Router DOM

### Backend (`/server`)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Real-time:** Socket.io
- **Authentication:** JWT (JSON Web Tokens)
- **File Handling:** Multer (for image uploads)

## 📦 Installation & Setup

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running locally or a cloud database URI (MongoDB Atlas).

### 1. Server Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory. You can use `.env.example` as a reference. Ensure you define:
```env
MONGO_URI="your_mongodb_connection_string"
ACCESS_TOKEN_SECRET_OWNER="your_owner_access_secret"
ACCESS_TOKEN_SECRET_TENANT="your_tenant_access_secret"
REFRESH_TOKEN_SECRET_OWNER="your_owner_refresh_secret"
REFRESH_TOKEN_SECRET_TENANT="your_tenant_refresh_secret"
ACCESS_LIFETIME="15m"
REFRESH_LIFETIME="7d"
CLOUDINARY_CLOUD_NAME="your_cloudinary_name"
CLOUDINARY_API_KEY="your_cloudinary_key"
CLOUDINARY_API_SECRET="your_cloudinary_secret"
RESET_PASSWORD_KEY="your_reset_key"
EMAIL_VERIFICATION_KEY="your_verification_key"
CLIENT_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
PORT=5500
```

Start the backend server:

```bash
npm start
``` 
*(Or `node server.js`)*

### 2. Client Setup

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

**Environment Configuration:**
Ensure your client is pointing to the correct backend URL. Check `.env` or `vite.config.mjs`. Use `VITE_APP_API_HOST` for Socket.io connections.

Start the frontend development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).

## 📂 Project Structure

```
├── client/              # React Frontend
│   ├── src/
│   │   ├── features/    # Redux Slices (Auth, RealEstate, etc.)
│   │   ├── pages/       # Owner and Tenant Pages
│   │   ├── components/  # Reusable UI Components
│   │   └── ...
│   └── ...
├── server/              # Express Backend
│   ├── controllers/     # Route Logic
│   ├── models/          # Mongoose Schemas (User, Property, Contract)
│   ├── routes/          # API Endpoints
│   └── ...
└── README.md            # Project Documentation
```
