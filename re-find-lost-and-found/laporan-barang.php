<?php include 'include/header.php';?>

    <div class="container my-5 bg-light">
        <h1 class="text-left mb-5 fw-bold ">Halaman Laporan Barang</h1>

        <div class="container mt-5 bg-light" >
            <div class="row g-4">
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <div class="card-header bg-primary text-white">
                                        <h2 class="h5 mb-0 text-center">FORMULIR PENEMUAN BARANG TEMUAN</h2>
                                    </div>

                                    <div class="card-body">
                                        <form id="form-penemuan"> 
                                            
                                            <div class="mb-3">
                                                <label for="penemuan-tanggal" class="form-label">Tanggal</label>
                                                <input type="date" class="form-control" id="penemuan-tanggal" required>
                                            </div>

                                            <div class="mb-3">
                                                <label for="penemuan-waktu" class="form-label">Waktu</label>
                                                <input type="time" class="form-control" id="penemuan-waktu" required>
                                            </div>
                                            
                                            <div class="mb-3">
                                                <label for="penemuan-nama-penemu" class="form-label">Nama Penemu</label>
                                                <input type="text" class="form-control" id="penemuan-nama-penemu" placeholder="Input Nama Lengkap" required>
                                            </div>
                                            
                                            <div class="mb-3">
                                                <label for="penemuan-prodi" class="form-label">Prodi dan Kelas</label>
                                                <input type="text" class="form-control" id="penemuan-prodi" placeholder="Misal: SI A2">
                                            </div>
                                            
                                            <div class="mb-3">
                                                <label for="penemuan-angkatan" class="form-label">Angkatan</label>
                                                <input type="number" class="form-control" id="penemuan-angkatan" placeholder="Misal: 2023">
                                            </div>

                                            <div class="mb-3">
                                                <label for="penemuan-nama-barang" class="form-label">Nama Barang</label>
                                                <input type="text" class="form-control" id="penemuan-nama-barang" placeholder="Misal: Dompet Kulit" required>
                                            </div>

                                            <div class="mb-4">
                                                <label for="penemuan-deskripsi" class="form-label">Deskripsi</label>
                                                <textarea class="form-control" id="penemuan-deskripsi" rows="3" placeholder="Sebutkan ciri-ciri barang dan lokasi penemuan" required></textarea>
                                            </div>

                                            <button type="submit" class="btn btn-primary w-100">Kirim Pelaporan</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <div class="card-header bg-success text-white">
                                        <h2 class="h5 mb-0 text-center">FORMULIR PENGAMBILAN BARANG TEMUAN</h2>
                                    </div>
                                    <div class="card-body">
                                        <form id="form-pengambilan"> 
                                            
                                            <div class="mb-3">
                                                <label for="pengambilan-tanggal" class="form-label">Tanggal</label>
                                                <input type="date" class="form-control" id="pengambilan-tanggal" required>
                                            </div>

                                            <div class="mb-3">
                                                <label for="pengambilan-waktu" class="form-label">Waktu</label>
                                                <input type="time" class="form-control" id="pengambilan-waktu" required>
                                            </div>
                                            
                                            <div class="mb-3">
                                                <label for="pengambilan-nama-penerima" class="form-label">Nama Penerima</label>
                                                <input type="text" class="form-control" id="pengambilan-nama-penerima" placeholder="Input Nama Lengkap" required>
                                            </div>
                                            
                                            <div class="mb-3">
                                                <label for="pengambilan-prodi" class="form-label">Prodi dan Kelas</label>
                                                <input type="text" class="form-control" id="pengambilan-prodi" placeholder="Misal: SI A2">
                                            </div>
                                            
                                            <div class="mb-3">
                                                <label for="pengambilan-angkatan" class="form-label">Angkatan</label>
                                                <input type="number" class="form-control" id="pengambilan-angkatan" placeholder="Misal: 2023">
                                            </div>

                                            <div class="mb-3">
                                                <label for="pengambilan-nama-barang" class="form-label">Nama Barang</label>
                                                <input type="text" class="form-control" id="pengambilan-nama-barang" placeholder="Misal: Kunci Motor" required>
                                            </div>

                                            <div class="mb-4">
                                                <label for="pengambilan-deskripsi" class="form-label">Deskripsi</label>
                                                <textarea class="form-control" id="pengambilan-deskripsi" rows="3" placeholder="Sebutkan barang yang ingin diambil" required></textarea>
                                            </div>

                                            <button type="submit" class="btn btn-success w-100">Kirim Pelaporan</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
       
       
    </div>
<?php include 'include/footer.php';?>
