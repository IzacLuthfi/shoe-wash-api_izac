import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import serverless from "serverless-http";
import itemsRouter from "./routes/items.js";

dotenv.config();

const app = express();
app.use(express.json());

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Middleware supaya supabase bisa diakses di routes
app.use((req, res, next) => {
  req.supabase = supabase;
  next();
});

// Routes
app.use("/items", itemsRouter);
app.get("/", (req, res) => {
  res.send("✅ Shoe Wash API is running...");
});

// 🚀 Hanya listen di lokal
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`✅ Local server running on port ${PORT}`));
}

// Handler untuk Vercel
export const handler = serverless(app);
export default app;
