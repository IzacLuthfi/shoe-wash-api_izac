import express from "express";
import dotenv from "dotenv";
import itemsRouter from "./routes/items.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routing
app.use("/items", itemsRouter);
app.get("/", (req, res) => res.send("✅ Shoe Wash API is running..."));

// Jalankan server di lokal (Vercel handle sendiri nanti)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;
