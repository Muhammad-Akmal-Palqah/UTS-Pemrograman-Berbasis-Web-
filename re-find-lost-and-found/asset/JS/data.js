// =================================================================
// data.js - Sumber Data Dummy untuk Seluruh Proyek
// =================================================================


// -----------------------------------------------------------------
// DATA UNTUK SIMPLE-DATATABLES (Daftar Pengumuman)
// Data statis  digabungkan dengan data dari Local Storage
// -----------------------------------------------------------------

// Data Dummy untuk Daftar Penemuan Barang (Tabel Atas)
const initialPenemuanData = [
    { 
        no: 1, 
        tanggal: "2025-10-01", 
        waktu: "09:15", 
        namaPenemu: "Muhammad Akmal Palqah", 
        prodi: "SI A2", 
        angkatan: 2024, 
        namaBarang: "Dompet", 
        deskripsi: "Ditemukan di ruang kelas 6.04 , ada KTP dan uang cash tidak ada." 
    },
    { 
        no: 2, 
        tanggal: "2025-10-05", 
        waktu: "12:45", 
        namaPenemu: "Riphan Romadlon", 
        prodi: " SI A2", 
        angkatan: 2024, 
        namaBarang: "ID Card Kampus", 
        deskripsi: "Ditemukan di lab kom lantai 5." 
    },
    { 
        no: 3, 
        tanggal: "2025-10-15", 
        waktu: "09:00", 
        namaPenemu: "Fatin Asyifa Nurrizky JenPutri", 
        prodi: "SI A2", 
        angkatan: 2024, 
        namaBarang: "Tumbler", 
        deskripsi: "Ditemukan di kelas 6.14, berwarna Pink" 
    }
    
];

// Data Dummy untuk Daftar Pengambilan Barang (Tabel Bawah)
const initialPengambilanData = [
    { 
        no: 1, 
        tanggal: "2025-10-02", 
        waktu: "09:15", 
        namaPenemu: "Rahayu padilah", 
        prodi: "SI A2", 
        angkatan: 2024, 
        namaBarang: "Dompet", 
        deskripsi: "Telah ditemukan oleh pemilik dompet " 
    },
    { 
        no: 2, 
        tanggal: "2025-10-07", 
        waktu: "12:45", 
        namaPengambil: "W. Bonita Juliana Sari", 
        prodi: " SI A2", 
        angkatan: 2024, 
        namaBarang: "ID Card Kampus", 
        deskripsi: "telah di ambil di satpam penjaga di lantai 5." 
    },
    { 
        no: 3, 
        tanggal: "2025-10-15", 
        waktu: "15:00", 
        namaPengambil: "Khansa Mufidah Salsabila", 
        prodi: "SI A2", 
        angkatan: 2024, 
        namaBarang: "Tumbler", 
        deskripsi: "telah diambil di satpam penjaga lantai 6" 
    }
];


// -----------------------------------------------------------------
// DATA UNTUK LEAFLET (Info Grafis - Peta)
// Menggunakan koordinat fiktif di sekitar kampus
// -----------------------------------------------------------------

const mapLocations = [
    { 
        id: 101, 
        lat: -6.938444, 
        lon: 107.607120, 
        name: "Dompet Kulit Cokelat", 
        status: "Hilang",
        keterangan: "Dekat kelas 6.07"
    },
    { 
        id: 102, 
        lat: -6.937879, 
        lon: 107.607796, 
        name: "HP infinix note 50 pro", 
        status: "Ditemukan",
        keterangan: "Ditemukan di kantin" 
    },
    { 
        id: 103, 
        lat: -6.937967, 
        lon: 107.608329, 
        name: "uang Rp.50,000", 
        status: "Hilang",
        keterangan: "Sekitar Masjid" 
    }
   
];


// -----------------------------------------------------------------
// DATA UNTUK HIGHCHARTS (Info Grafis - Grafik)
// Simulasi statistik barang hilang vs ditemukan per hari
// -----------------------------------------------------------------

const chartData = {
    categories: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    series: [
        { 
            name: 'Total Barang Dilaporkan', 
            data: [25, 30, 18, 22, 40, 15] // Total Laporan Masuk
        },
        { 
            name: 'Barang yang Sudah Diambil', 
            data: [10, 15, 8, 10, 15, 5] // Barang yang Laporannya Sudah Diambil/Selesai
        }
    ]
};