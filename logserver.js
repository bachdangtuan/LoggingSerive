const express = require('express');
const path = require("path");
const app = express();
const {rootRouter} = require("./router");
const {connectMongoDB} = require("./setup/connectMongoDB");
const PORT = 5001

///////////// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,*');
    // Set to true if you need the website to include cookies in the requests sent
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
// Connected MongoDB
connectMongoDB().then()

app.use("/api/v1", rootRouter)
///////////// cài đặt kiểu json ép kiểu json
app.use(express.json());

///////////// cài đặt static file
const publicPathDir = path.join(__dirname, "./public")
app.use(express.static(publicPathDir))

///////////// App listing port
app.listen(PORT, async () => {
    console.log(`Server khoi tao port ${PORT} http://localhost:${PORT}`)
})

