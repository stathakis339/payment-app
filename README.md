# 💳 Payment App

A full-stack payment application built with React, Node.js and Viva Wallet API.

## Features

- 📝 Payment form with validation
- 🔒 Secure backend with Node.js + Express
- 💳 Viva Wallet payment integration
- ✅ Real-time payment processing
- 🔄 Automatic redirect to payment gateway

## Tech Stack

**Frontend:**
- React
- Vite

**Backend:**
- Node.js
- Express
- Axios
- CORS
- dotenv

**Payment:**
- Viva Wallet Smart Checkout API

## Getting Started

### Backend:
```bash
cd payment-app
npm install
node server.js
```

### Frontend:
```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root folder:
VIVA_CLIENT_ID=your_client_id
VIVA_CLIENT_SECRET=your_client_secret

## Flow
User fills form → Node.js Server → Viva Wallet API → Payment Page → Success
