import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js"

const app = express();

app.use( "/api/user" , router);

mongoose
  .connect(
    `mongodb+srv://admin:1Rh6C2wRbxahiQYf@cluster0.zhgv0ms.mongodb.net/Vlog?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected to database and listening to localhost 5000")
  )
  .catch((err) => console.log(err));
