import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// Buat koneksi ke Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default supabase;
