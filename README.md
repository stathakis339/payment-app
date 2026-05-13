# 💳 Payment App

A full-stack payment application built with React, Node.js and Viva Wallet API.

## Live Demo

https://stathakis339.github.io/payment-app/

## Features

- 📝 Payment form with real-time validation
- 🔒 Secure backend with Node.js + Express
- 💳 Viva Wallet Smart Checkout integration
- ✅ Real-time payment processing
- 🔄 Automatic redirect to payment gateway
- 🎨 Responsive design with Tailwind CSS

## Tech Stack

**Frontend:**
- React
- Vite
- Tailwind CSS

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

## How It Works
User fills form → React Frontend → Node.js Server → Viva Wallet API → Payment Page → Success ✅
