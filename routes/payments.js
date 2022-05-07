const express = require("express")
const Razorpay = require("razorpay")
const crypto = require("crypto")
require("dotenv").config()

const router = express.Router()

router.post("/orders", (req, res) => {
    const { amount, currency, receipt } = req.body
    console.log("Creating RZP order of 2000rs")
    try {
        let instance = new Razorpay({
            key_id: process.env.RZP_ID,
            key_secret: process.env.RZP_KEY,
        });
        let options = {
            amount, 
            currency,
            receipt
        };
        instance.orders.create(options, function(err, order) {
            res.send({order})
        }); 
    }
    catch(error) {
        console.log(error)
        res.send({error: "Error"})
    }
})

router.post("/verify", (req, res) => {
    console.log("Starting payment verification process")
    let body = req.body.razorpayOrderId + "|" + req.body.razorpayPaymentId;
    let expectedSignature = crypto
    .createHmac("sha256", process.env.RZP_KEY)
    .update(body.toString())
    .digest("hex");
    var response = { status: "failure" };
    if (expectedSignature === req.body.razorpaySignature) {
        response = { status: "success" };
    }
    res.send(response)
})
router.get("/", (req, res) => {
    res.send("Backend server of SOD 2022. Developed by Ved")
})
module.exports = router


