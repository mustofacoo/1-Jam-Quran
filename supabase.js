// File: config.js

// 1. Dapatkan URL dan Kunci 'anon' dari Pengaturan Supabase Anda
// Masuk ke Supabase > Proyek Anda > Settings (roda gigi) > API

const SUPABASE_URL = 'https://tcaiuzhcrywzkzdyytod.supabase.co'; //
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYWl1emhjcnl3emt6ZHl5dG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NDExMTMsImV4cCI6MjA4MDMxNzExM30.mfKBVMD-wyS4S05GX6srUR5WWa1pDnq6f4eQ34-SPRE'; // 

// Inisialisasi Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Validasi koneksi (opsional, untuk debugging)
if (!SUPABASE_URL.includes('supabase.co') || SUPABASE_ANON_KEY === 'your-anon-key-here') {
    console.warn('⚠️ PERINGATAN: Database belum diatur!');
    console.warn('Silakan update SUPABASE_URL dan SUPABASE_ANON_KEY di file supabase.js');
}
