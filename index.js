const express = require("express")
const cors = require("cors")
const app = express()
const paymentRoutes = require("./routes/payments")
const databaseRoutes = require("./routes/dbInteractions")
const mongoose = require("mongoose")

app.use(express.json())
app.use(cors())

app.use("/payment", paymentRoutes)
app.use("/db", databaseRoutes)

// TEST ROUTES

// app.get("/", (req, res) => {
//     checkStudentRegistrationStatus("abc")
// })
// app.post("/", (req, res) => {
//     console.log(req.body)
//     addDataToDatabase(1, req.body)
// })

app.listen(process.env.PORT || 5000, () => {
    console.log(`Process runnning in port ${process.env.PORT || 5000}`)
    const uri = process.env.MONGO_URI
    const options = {
          useNewUrlParser: true,
          useUnifiedTopology: true
    }
    mongoose.connect(uri, options).then(data => {
          console.log("Connected to DB")
    }).catch(err => console.log(err))
})