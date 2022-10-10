import express from 'express';
import bodyParser from 'body-parser';
import  cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from  './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts',postRoutes);
const PORT  = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://shivamrai:shivamrai17@cluster0.fygsg0d.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL)
.then(()=>{app.listen(PORT,()=>{console.log(`server running on port http://localhost:${PORT}`)})})
.catch((error)=>{console.log(`${error} did not connect`)});

// mongoose.set('useFindAndModify', false);