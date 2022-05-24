const express = require("express")
require("dotenv").config()

const router = express.Router()

const { addDataToDatabase, getItemFromDatabase } = require("../databaseHelpers")

router.post("/add-to-db", (req, res) => {
    addDataToDatabase(req.body.model, req.body.data, res)
    console.log(req.body.data)
})
router.post("/get-from-db", (req, res) => {
    getItemFromDatabase(req.body.model, req.body.filterData)
    .then(data => {
        res.send(data)
    })
})

module.exports = router

