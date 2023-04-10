import connectMongo from '../../../utils/connectMongo'
import Test from '@/utils/model';
import mongoose from 'mongoose';

export default async function handler(req, res) {

    console.log('connecting');
    await mongoose.connect('mongodb+srv://radekvlk:radekvlk@cluster0.pykgiln.mongodb.net/?retryWrites=true&w=majority')
    console.log('connected');
    await Test.create(req.body)

    res.redirect('/admin')

  }
  