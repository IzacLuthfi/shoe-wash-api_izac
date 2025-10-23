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

POST http://localhost:3000/items
{
    "name": "Under Armour Charged",
    "customer_name": "Mega Sari",
    "status": "Selesai",
    "price": 53000
}

[
    {
        "id": "2527a990-e7dc-4ef7-b0eb-008860276f26",
        "name": "Under Armour Charged",
        "customer_name": "Mega Sari",
        "status": "Selesai",
        "price": 53000,
        "created_at": "2025-10-23T16:07:54.339975+00:00",
        "updated_at": "2025-10-23T16:07:54.339975+00:00"
    }
]

GET http://localhost:3000/items
GET http://localhost:3000/items?status=Selesai

PUT http://localhost:3000/items/2527a990-e7dc-4ef7-b0eb-008860276f26
{
  "name": "Under Armour Charged Plus",
  "customer_name": "Mega Sari",
  "status": "Dalam Proses",
  "price": 58000
}

[
  {
    "id": "2527a990-e7dc-4ef7-b0eb-008860276f26",
    "name": "Under Armour Charged Plus",
    "customer_name": "Mega Sari",
    "status": "Dalam Proses",
    "price": 58000,
    "created_at": "2025-10-23T16:07:54.339975+00:00",
    "updated_at": "2025-10-23T16:15:12.110000+00:00"
  }
]

DELETE http://localhost:3000/items/2527a990-e7dc-4ef7-b0eb-008860276f26
{
  "message": "Item berhasil dihapus"
}

Link Github : https://github.com/IzacLuthfi/shoe-wash-api_izac.git

Upload ke vercel.com
isi di bagian Environment variables

SUPABASE_URL=https://viddxjmtruncgtnluvda.supabase.co

SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpZGR4am10cnVuY2d0bmx1dmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjc5OTgsImV4cCI6MjA3NjgwMzk5OH0.8Lw4YCOhbE5dEAU4L94xrrldu7ZhZewkQgGx3xcCIjk

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
