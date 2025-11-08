document.addEventListener('DOMContentLoaded', function () {
    // =================================================================
    // LOGIKA SIMULASI PENYIMPANAN DATA (LOCAL STORAGE)
    // Digunakan pada laporan-barang.php
    // =================================================================

    // Formulir Penemuan Barang Temuan 
    const formPenemuan = document.getElementById('form-penemuan');
    if (formPenemuan) {
        formPenemuan.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form dikirim ke server

            const dataBaru = {
                id: Date.now(),
                tanggal: document.getElementById('penemuan-tanggal').value,
                waktu: document.getElementById('penemuan-waktu').value,
                namaPenemu: document.getElementById('penemuan-nama-penemu').value,
                prodi: document.getElementById('penemuan-prodi').value,
                angkatan: document.getElementById('penemuan-angkatan').value,
                namaBarang: document.getElementById('penemuan-nama-barang').value,
                deskripsi: document.getElementById('penemuan-deskripsi').value,
                lat: -6.8840, 
                lon: 107.6110,
                status: 'Ditemukan (Baru Lapor)'
            };

            // Simpan Data ke Local Storage (KEY: 'penemuanData')
            let existingData = JSON.parse(localStorage.getItem('penemuanData')) || [];
            existingData.push(dataBaru);
            localStorage.setItem('penemuanData', JSON.stringify(existingData));

            alert('Laporan penemuan berhasil disimpan sementara! Cek Daftar Pengumuman.');
            this.reset();
        });
    }
    
    // Formulir Pengambilan Barang Temuan 
    const formPengambilan = document.getElementById('form-pengambilan');
    if (formPengambilan) {
        formPengambilan.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const dataBaru = {
                id: Date.now(),
                tanggal: document.getElementById('pengambilan-tanggal').value,
                waktu: document.getElementById('pengambilan-waktu').value,
                namaPengambil: document.getElementById('pengambilan-nama-penerima').value,
                prodi: document.getElementById('pengambilan-prodi').value,
                angkatan: document.getElementById('pengambilan-angkatan').value,
                namaBarang: document.getElementById('pengambilan-nama-barang').value,
                deskripsi: document.getElementById('pengambilan-deskripsi').value,
                status: 'Telah Diambil'
            };

            // Simpan Data ke Local Storage (KEY: 'pengambilanData')
            let existingData = JSON.parse(localStorage.getItem('pengambilanData')) || [];
            existingData.push(dataBaru);
            localStorage.setItem('pengambilanData', JSON.stringify(existingData));

            alert('Laporan pengambilan berhasil disimpan sementara! Cek Daftar Pengumuman.');
            this.reset();
        });
    }

    
    // =================================================================
    // LOGIKA DATATABLES (Daftar Pengumuman)
    // Digunakan pada daftar-pengumuman.php
    // =================================================================

    // Fungsi untuk menggabungkan data dummy dan Local Storage
    function getCombinedTableData(initialData, localStorageKey) {
        // Ambil data baru dari Local Storage
        const localStorageData = JSON.parse(localStorage.getItem(localStorageKey)) || [];

        // Gabungkan data dummy statis dengan data dari Local Storage
        const combinedData = initialData.concat(localStorageData);

        // Format ulang data menjadi array of arrays (format yang dibutuhkan Simple-DataTables)
        return combinedData.map((item, index) => [
            (index + 1), // Nomor urut
            item.tanggal,
            item.waktu,
            item.namaPenemu || item.namaPengambil || '-', // Ambil nama yang tersedia
            item.prodi,
            item.angkatan,
            item.namaBarang,
            item.deskripsi
        ]);
    }

    // Inisialisasi Tabel Penemuan
    const penemuanTableElement = document.getElementById('tabel-penemuan');
    if (penemuanTableElement && typeof simpleDatatables !== 'undefined') {
        new simpleDatatables.DataTable(penemuanTableElement, {
            data: {
                headings: [ "No", "Tanggal", "Waktu", "Nama Penemu", "Prodi dan Kelas", "Angkatan", "Nama Barang", "Deskripsi" ],
                // Menggunakan data dummy + Local Storage
                data: getCombinedTableData(initialPenemuanData, 'penemuanData') 
            }
        });
    }

    // Inisialisasi Tabel Pengambilan
    const pengambilanTableElement = document.getElementById('tabel-pengambilan');
    if (pengambilanTableElement && typeof simpleDatatables !== 'undefined') {
        new simpleDatatables.DataTable(pengambilanTableElement, {
            data: {
                headings: [ "No", "Tanggal", "Waktu", "Nama Pengambil", "Prodi dan Kelas", "Angkatan", "Nama Barang", "Deskripsi" ],
                // Menggunakan data dummy + Local Storage
                data: getCombinedTableData(initialPengambilanData, 'pengambilanData') 
            }
        });
    }


    // =================================================================
    // LOGIKA HIGHCHARTS DAN LEAFLET (Info Grafis)
    // Digunakan pada info-grafis.php
    // =================================================================

    //  Highcharts Initialization 
    const chartContainer = document.getElementById('highcharts-container');
    if (chartContainer && typeof Highcharts !== 'undefined' && typeof chartData !== 'undefined') {
        
        // Data dari data.js
        const { categories, series } = chartData;

        Highcharts.chart('highcharts-container', {
            chart: { type: 'column' },
            title: { text: 'Statistik Barang Dilaporkan vs Diambil' },
            xAxis: { categories: categories },
            yAxis: { min: 0, title: { text: 'Jumlah Laporan' } },
            series: series
        });
    }


    //  Leaflet Map Initialization 
    const mapContainer = document.getElementById('leaflet-map');
    if (mapContainer && typeof L !== 'undefined' && typeof mapLocations !== 'undefined') {
        
        // Inisialisasi Peta (Koordinat fiktif kampus)
        const map = L.map('leaflet-map').setView([-6.938296, 107.606973], 15); 
        
        // Tambahkan Tile Layer (Peta Dasar)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Tambahkan Marker dari data.js
        mapLocations.forEach(loc => {
            L.marker([loc.lat, loc.lon])
             .addTo(map)
             .bindPopup(`<b>${loc.name}</b><br>Status: ${loc.status}<br>${loc.keterangan}`);
        });
    }
});