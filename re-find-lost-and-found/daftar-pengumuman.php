<?php include 'include/header.php';?>

<div class="container my-5">
    <h1 class="text-center mb-5 fw-bold text-dark">Daftar Pengumuman Barang</h1>
    
    <div class="card shadow-sm mb-5">
        <div class="card-header bg-primary text-white">
            <h2 class="h5 mb-0">Daftar Penemuan Barang</h2>
        </div>
        <div class="card-body">
            <table id="tabel-penemuan" class="table table-striped table-hover table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tanggal</th>
                        <th>Waktu</th>
                        <th>Nama Penemu</th>
                        <th>Prodi dan Kelas</th>
                        <th>Angkatan</th>
                        <th>Nama Barang</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    </tbody>
            </table>
        </div>
    </div>

    <div class="card shadow-sm">
        <div class="card-header bg-success text-white">
            <h2 class="h5 mb-0">Daftar Pengambilan Barang</h2>
        </div>
        <div class="card-body">
            <table id="tabel-pengambilan" class="table table-striped table-hover table-bordered" style="width:100%">
                 <thead>
                    <tr>
                        <th>No</th>
                        <th>Tanggal</th>
                        <th>Waktu</th>
                        <th>Nama Pengambil</th>
                        <th>Prodi dan Kelas</th>
                        <th>Angkatan</th>
                        <th>Nama Barang</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    </tbody>
            </table>
        </div>
    </div>

</div>

<?php include 'include/footer.php';?>