 let express = require('express')
require('dotenv').config()
let mongoose = require('mongoose')
let models = require('./models/models')
let PORT = process.env.PORT || 3000;
let cors = require('cors')
let fileUpload = require('express-fileupload')
let errorHandler = require('./middleware/ErrorHandlingMiddleware')
let router = require('./routes/index')
let path = require('path')
let app =express()


// const corsOptions = {
//     origin: ['https://vladimir-danilov.vercel.app'],
//     allowedHeaders: ["Content-Type", "Authorization","Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
//     enablePreflight: true
// }

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions))

app.use(cors())
app.use(express.json())
// app.use(express.static(path.resolve(__dirname,'static')))
// app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)



let start = async () => {
    try {
        await mongoose.connect(process.env.DB_URl, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log(e);
    }
}

start()