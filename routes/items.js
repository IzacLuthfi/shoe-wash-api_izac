import express from "express";
import supabase from "../lib/supabase.js";

const router = express.Router();

// ✅ CREATE - Tambah item baru
router.post("/", async (req, res) => {
  const { name, customer_name, status, price } = req.body;

  const { data, error } = await supabase
    .from("items")
    .insert([{ name, customer_name, status, price }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// ✅ READ - Ambil semua item / filter by status
router.get("/", async (req, res) => {
  const { status } = req.query;
  let query = supabase.from("items").select("*");

  if (status) query = query.eq("status", status);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// ✅ UPDATE - Ubah data item
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, customer_name, status, price } = req.body;

  const { data, error } = await supabase
    .from("items")
    .update({
      name,
      customer_name,
      status,
      price,
      updated_at: new Date(),
    })
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// ✅ DELETE - Hapus item berdasarkan id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("items").delete().eq("id", id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Item berhasil dihapus" });
});

export default router;
