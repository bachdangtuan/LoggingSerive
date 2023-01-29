///////////// connect MongoDB
const {MongoClient} = require("mongodb");
const mongoURI = 'mongodb+srv://dangtuan:ad8EQJDoUQssDhGY@cluster0.ymsq3wi.mongodb.net/?retryWrites=true&w=majority'


let databaseMongo;
const connectMongoDB = async () => {
    await MongoClient.connect(mongoURI, {useNewUrlParser: true}, (err, client) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Kết nối mongoDB thành công và sẵn sàng dữ liệu')
            console.log(2)
            databaseMongo = client.db('test')
        }
    });
}
///////////// Export Connect Mongo
module.exports = {
    connectMongoDB,
    getDB: () => databaseMongo
};
