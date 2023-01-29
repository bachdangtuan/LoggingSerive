const STATUS = require("../core/constant/status.contant")
const {databaseMongo, connectMongoDB} = require("../setup/connectMongoDB");

const getLogging = async (req, res) => {
    console.log(databaseMongo)
    try {

        // db.collection('<collection>').find().toArray((err, result) => {
        //     if (err) return console.log(err);
        //     res.send(result);
        // });

    } catch (e) {
        res.status(STATUS.STATUS_500)
    }


}

module.exports = {
    getLogging
}
