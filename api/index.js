import express from "express";
import cors from "cors";
import itemsRouter from "../routes/items.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/items", itemsRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
