import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

//might need to fix later with the "mongodb+srv://<myusername>:<mypassword>@cluster0.dgpco.mongodb.net/<mydatabasename>?retryWrites=true&w=majority"
const mongoUri = process.env.URI ||  "mongodb://127.0.0.1:27017";

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { dbName: "users" })
.then(()=>console.log('connected'))
.catch(e=>console.log(e));
/*
mongoose.connection.on('error', err => {
 throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
*/
