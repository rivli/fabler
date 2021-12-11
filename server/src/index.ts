import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import DB from "./DB/connect";

// initialize configuration
dotenv.config();

DB.connect();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:8080"],
  })
);

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

import ArticleRoutes from "./routes/articles";

// Define routes
app.use("/articles", ArticleRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
