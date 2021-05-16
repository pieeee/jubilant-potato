if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/payment", (req, res) => {
  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.log(stripeErr);
      res.status(500).json({ error: stripeErr });
    } else {
      res.status(200).json({ success: stripeRes });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server Running on port:", port);
});
