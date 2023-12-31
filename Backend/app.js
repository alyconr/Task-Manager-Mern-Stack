const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const cors = require("cors");

//middleware
app.use(require("cors")());
app.use(errorHandlerMiddleware);
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);
app.use(notFound);




const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(
        `App is listening on port ${port} and connecting to database!`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
