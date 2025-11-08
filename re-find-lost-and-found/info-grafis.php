<?php include 'include/header.php';?>

    <div class="container my-6 ">
        <h1 class="text-center fw-bold my-5">Statistik Barang Hilang dan Ditemukan</h1>

        <div class="card shadow-sm mb-5">
            <div class="card-header bg-light">
                <h2 class="h5 mb-0">Persentase Barang Hilang vs Ditemukan (Per Hari)</h2>
            </div>
            <div class="card-body">
                <div id="highcharts-container" style="height: 400px; min-width: 310px;">
                    </div>
            </div>
        </div>

        <div class="card shadow-sm">
            <div class="card-header bg-light">
                <h2 class="h5 mb-0">Lokasi Barang Hilang/Ditemukan Terbaru</h2>
            </div>
            <div class="card-body">
                <div id="leaflet-map" style="height: 500px;">
                    MAP
                    </div>
            </div>
        </div>

    </div>
    </div>

<?php include 'include/footer.php';?>