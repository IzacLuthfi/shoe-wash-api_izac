import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import itemsRouter from "./routes/items.js";

dotenv.config();
const app = express();
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// routes
app.use("/items", itemsRouter);
app.get("/", (req, res) => res.send("✅ Shoe Wash API is running..."));

// ❌ JANGAN pakai app.listen di Vercel
// app.listen(3000, () => console.log("Server running"));

// ✅ Sebagai gantinya, export handler-nya
export default app;
