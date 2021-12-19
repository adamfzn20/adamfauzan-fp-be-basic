const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

//routers
app.use("/api", require("./routers/jasaRouter"));

mongoose
  .connect(
    "mongodb+srv://adam:adam123@clusteradmfauzann.0zz1k.mongodb.net/jasadb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "jasadb",
    }
  )
  .then(() => {
    console.log("Database Connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Connected to localhost:3000");
});
