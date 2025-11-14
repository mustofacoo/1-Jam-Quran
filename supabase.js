// File: config.js

// 1. Dapatkan URL dan Kunci 'anon' dari Pengaturan Supabase Anda
// Masuk ke Supabase > Proyek Anda > Settings (roda gigi) > API

const SUPABASE_URL = 'https://scudbyombckdtndypunj.supabase.co'; //
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdWRieW9tYmNrZHRuZHlwdW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMDUyNTgsImV4cCI6MjA3ODU4MTI1OH0.lkJy_jREhkfng6PgPLnlD9LiSowZd51ZKW2piZUgrbA'; // 

// Inisialisasi Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Validasi koneksi (opsional, untuk debugging)
if (!SUPABASE_URL.includes('supabase.co') || SUPABASE_ANON_KEY === 'your-anon-key-here') {
    console.warn('⚠️ PERINGATAN: Database belum diatur!');
    console.warn('Silakan update SUPABASE_URL dan SUPABASE_ANON_KEY di file supabase.js');
}