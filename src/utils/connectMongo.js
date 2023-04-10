import mongoose from 'mongoose'

export const connectMongo = async ()=>mongoose.connect('mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/?retryWrites=true&w=majority')