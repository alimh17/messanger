const path = require('path');
const express = require('express');
const connectDB = require('./db/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const uploaded = require('express-fileupload');
require('dotenv').config()


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(uploaded())

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000

//* ------------------ Router ------------------
app.use("/", require('./router/upload'))
app.use("/api", require('./router/allUsers'))


connectDB()
app.listen(PORT, () => console.log(`server is runnig on port ${PORT}`))
