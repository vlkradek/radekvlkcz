import { MongoClient } from 'mongodb'


const URI = 'mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/content?retryWrites=true&w=majority'
const options = {}

if (!URI) throw new Error('no uri')

let client = new MongoClient(URI, options)
let clientPromise

if(true){
    if (!global._mongoClientPromise){
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise