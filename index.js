// import express from "express"

// const app = express();
// const port = 4000; //add your port here
// const PUBLISHABLE_KEY = "ADD_PUBLISHABLE KEY HERE";
// const SECRET_KEY = "ADD_SECRETE KEY HERE";
// import Stripe from "stripe";

// //Confirm the API version from your stripe dashboard
// const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// app.post("/create-payment-intent", async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 1099, //lowest denomination of particular currency
//       currency: "usd",
//       payment_method_types: ["card"], //by default
//     });

//     const clientSecret = paymentIntent.client_secret;

//     res.json({
//       clientSecret: clientSecret,
//     });
//   } catch (e) {
//     console.log(e.message);
//     res.json({ error: e.message });
//   }
// });

// import express from "express";

import express from "express"

const app = express();
const port = 4000; //add your port here
const PUBLISHABLE_KEY = "pk_live_51KZtBxSDYzHRtS84tTys0cRcuGXn5KlwqnxW9oc0VAtUcwqW2aStBuMcxpd6ibwZrhmUC48Xs2dmf01Mn9ObaPze00BpBtlDz5";
const SECRET_KEY = "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";
import Stripe from "stripe";



//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async(req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099, //lowest denomination of particular currency
            currency: "usd",
            payment_method_types: ["card"], //by default
        });

        const clientSecret = paymentIntent.client_secret;

        res.json({
            clientSecret: clientSecret,
        });
    } catch (e) {
        console.log(e.message);
        res.json({ error: e.message });
    }
});