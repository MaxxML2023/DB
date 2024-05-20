const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://ajekfdjdidkthg:3DmBCkZLvSMJWMFs@cluster0.5pjhgvc.mongodb.net/Cars?retryWrites=true&w=majority&appName=Cluster0mongodb://localhost')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/').then(()=> console.log('Connected to Mongo'))
const start = async () => {
    try {
          await client.connect()
          console.log('Connect')
    } catch (err) {
        console.log(err);
}};
start()