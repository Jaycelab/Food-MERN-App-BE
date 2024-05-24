import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

//casting or forcing to string
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(cors());
app.use(express.json());

// /api/my/user
app.use("/api/my/user", myUserRoute);

//double check code below
/*app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});*/

//port , callback
app.listen(6900, () => {
  console.log("Server started on localhost: 6900");
});
