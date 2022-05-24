const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSubmissions = new Schema({
    uid: {
        type: String,
        required: true
    },
    assignmentSlug: {
        type: String,
        required: true
    },
    fileData: {
        type: Object,
        required: true
    }
})
const users = new Schema({
    uid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: Number
    }
})
const userSubmissionsModel = mongoose.model('UserSubmission', userSubmissions)
const usersModel = mongoose.model('Users', users)

module.exports = {
    userSubmissionsModel,
    usersModel
}