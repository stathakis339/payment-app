import { useState } from "react";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (name.length < 2) newErrors.name = "Name must be at least 2 characters!";

    if (!email.includes("@") || !email.includes("."))
      newErrors.email = "Please enter a valid email!";

    if (product.trim() === "") newErrors.product = "Product cannot be empty!";

    if (amount <= 0 || isNaN(amount))
      newErrors.amount = "Amount must be greater than 0!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const response = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, product, amount }),
    });

    const data = await response.json();

    if (data.success) {
      console.log("Redirecting to:", data.paymentUrl);
      window.location.replace(data.paymentUrl);
    } else {
      alert("Payment failed!");
    }
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          required
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />
        <br />

        <label htmlFor="product">Product:</label>
        <br />
        <input
          type="text"
          id="product"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        {errors.product && <p style={{ color: "red" }}>{errors.product}</p>}
        <br />
        <br />

        <label htmlFor="amount">Amount:</label>
        <br />
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
        <br />
        <br />

        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default PaymentForm;
