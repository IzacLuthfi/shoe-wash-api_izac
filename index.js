import express from "express";
import dotenv from "dotenv";
import itemsRouter from "./routes/items.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send(" Shoe Wash API is running..."));
app.use("/items", itemsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
