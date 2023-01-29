const STATUS = require("../core/constant/status.contant")
const {getDB} = require("../setup/connectMongoDB");

let dbMongo

const getLogging = async (req, res) => {
    dbMongo = getDB()
    // console.log(dbMongo)
    try {
        const limit = 10;
        const pageNumber = 1;
        dbMongo.collection('Log').count((error, count) => {
            dbMongo.collection('Log').find()
                .sort({timestamp: -1})
                // .skip((pageNumber))
                // .limit(limit)
                .toArray((error, items) => {
                    console.log(count, items);
                    res.status(STATUS.STATUS_200).send({
                        totalItems: count,
                        listLog: items
                    })
                });
        });
    } catch (e) {
        res.status(STATUS.STATUS_500)
    }


}

module.exports = {
    getLogging
}
