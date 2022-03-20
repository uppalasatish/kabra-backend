const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/book-routes");
const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose.connect("mongodb+srv://admin:bNCF6C2gO6KqAoeC@cluster0.a2k8k.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
}).catch((err) => console.log(err));
// bNCF6C2gO6KqAoeC