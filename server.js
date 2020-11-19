//Getting all the required modules 
const express = require("express");
const mongoose = require("mongoose");

//Setting up the ports
const PORT = process.env.PORT || 3000;

//App connections 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routes to the files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Database Connection getting created
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true,});

//Listening to which port
app.listen(PORT, function () {
  console.log("Listening to port: " + PORT);
});