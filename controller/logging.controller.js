const STATUS = require("../core/constant/status.contant")
const {getDB} = require("../setup/connectMongoDB");

let dbMongo

const getLogging = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10
    const page = parseInt(req.query.page) || 1
    dbMongo = getDB()
    // console.log(dbMongo)
    try {
        dbMongo.collection('Log').count((error, count) => {
            dbMongo.collection('Log').find()
                .sort({timestamp: -1})
                .skip((page))
                .limit(limit)
                .toArray((error, items) => {
                    res.status(STATUS.STATUS_200).send({
                        message: 'Lấy thành công',
                        thisPage: page,
                        limit: limit,
                        data: items,
                        totalItems: count,
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
