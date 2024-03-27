const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/user-routes.js");
const blogRouter = require ("./routes/blog-routes.js");

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb +srv://zan4936:Brown345@cluster0.2z8t6um.mongodb.net/?retryWrites=true&w=majority&appName=Blog'
)
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err)=>{
     console.log(err);

});

// app.listen
app.listen(5000, () => {
    console.log("App Running on port 5000");
});


