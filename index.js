import express from 'express';
import User from './models/User.js';
const app = express();
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://aladesiun:mMpuYSdZfWo6iWh8@cluster4themmy.7dhm7.mongodb.net/node-practice-db')
app.post('/user', ()=>{
    const user = new User({
        name:"tope",
        age:50
    })
    user.save()
})

app.listen(5900, ()=>{});

export default app;