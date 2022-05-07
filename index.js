const express = require("express")
const cors = require("cors")
const app = express()
const paymentRoutes = require("./routes/payments")

app.use(express.json())
app.use(cors())

// app.use("/payment", paymentRoutes)
app.get('/', (req, res) => {
    res.send("Server working")
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Process runnning in port ${process.env.PORT || 5000}`)
})