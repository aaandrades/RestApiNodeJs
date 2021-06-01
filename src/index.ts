import express from "express";
import "./config/config";
import mongoose from "mongoose";

// Initialize the serve
const app = express();

// Decoding and encode
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Importing routes (Controller)
app.use(require("./routes/controller"));

// Conect to mongoose
mongoose.connect(
  process.env.URLDB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database ONLINE");
  }
);

// create a server instance:
app.listen(process.env.PORT, () =>
{
  console.log("MONGO BD URI: ",process.env.URLDB);
  console.log(`Starting server in PORT: ${process.env.PORT}`)
}
);
