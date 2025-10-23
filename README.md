# Shoe Wash API

REST API sederhana untuk layanan daftar barang cuci sepatu — dibangun dengan **Node.js**, **Express.js**, dan **Supabase** (Postgres). Contoh ini mendukung operasi CRUD dan filter berdasarkan status.

## Deskripsi Umum
API ini menyimpan daftar sepatu yang sedang dicuci. Setiap item memiliki `name`, `customer_name`, `status`, `price`, dan timestamp. Data disimpan di Supabase.

## Tujuan dan Fitur Utama
- Create / Read / Update / Delete (CRUD) untuk item cuci sepatu
- Filter berdasarkan status: `GET /items?status=Selesai`
- Mudah dideploy ke Vercel

## Struktur Data (tabel `items`)
- `id` (UUID) — primary key
- `name` (text) — nama sepatu
- `customer_name` (text) — nama pemilik
- `status` (text) — contoh: `Menunggu`, `Sedang Diproses`, `Selesai`
- `price` (numeric)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

SQL:
```sql
create table public.items (
  id uuid primary key,
  name text not null,
  customer_name text not null,
  status text not null default 'Menunggu',
  price numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index idx_items_status on public.items (status);
