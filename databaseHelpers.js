const { userSubmissionsModel, usersModel } = require("./Schema")

const checkStudentRegistrationStatus = (uid) => {
    userSubmissionsModel.find({"uri": "123"})
    .then(res => {
        console.log(res)
    })
}

const addDataToDatabase = (model, data) => {
    switch (model) {
        case 1:
            new userSubmissionsModel(data).save()
            .then(() => console.log("Data Saved"))
            .catch(err => console.log(err))
            break
        case 2:
            new usersModel(data).save()
            .then(() => console.log("Data Saved"))
            .catch(err => console.log(err))
            break
        default:
            console.log("Invalid request")
            break
    }
}
const getItemFromDatabase = async (model, filterData) => {
    let returnVal;
    console.log("Sending a request")
    switch(model) {
        case 1:
            await userSubmissionsModel.find({...filterData})
            .then((res) => {
                returnVal = res
            })
            break;
        case 2:
            await usersModel.find({...filterData})
            .then((res) => {
                returnVal = res
            })
            break;
        default:
            returnVal = null
            break;
    }
    console.log(returnVal)
    return returnVal
}

module.exports = {
    checkStudentRegistrationStatus,
    addDataToDatabase,
    getItemFromDatabase
}