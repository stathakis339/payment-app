require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const clientId = process.env.VIVA_CLIENT_ID;
const clientSecret = process.env.VIVA_CLIENT_SECRET;

const app = express();
app.use(cors());
app.use(express.json());

const getAccessToken = async () => {
  const response = await axios.post(
    "https://demo-accounts.vivapayments.com/connect/token",
    "grant_type=client_credentials",
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: clientId, password: clientSecret },
    },
  );
  return response.data.access_token;
};

app.post("/api/payment", async (req, res) => {
  const { name, email, product, amount } = req.body;

  try {
    const token = await getAccessToken();

    const order = await axios.post(
      "https://demo-api.vivapayments.com/checkout/v2/orders",
      {
        amount: amount * 100, // σε cents!
        customerTrns: `${product} - ${name}`,
        customer: { email, fullName: name },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const orderCode = order.data.orderCode;
    const paymentUrl = `https://demo.vivapayments.com/web/checkout?ref=${orderCode}`;

    res.json({ success: true, paymentUrl });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Payment failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
