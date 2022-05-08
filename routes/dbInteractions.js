const express = require("express")
require("dotenv").config()

const router = express.Router()

const { addDataToDatabase, getItemFromDatabase } = require("../databaseHelpers")

router.post("/add-to-db", (req, res) => {
    addDataToDatabase(req.body.model, req.body.data)
    .then(response => {
        res.send(response)
    })
})
router.post("/get-from-db", (req, res) => {
    getItemFromDatabase(req.body.model, req.body.filterData)
    .then(data => {
        res.send(data)
    })
})

module.exports = router

