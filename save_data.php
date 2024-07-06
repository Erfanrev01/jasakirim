<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $distance = $_POST['distance'];
    $cost = $_POST['cost'];

    $entry = "Nama: " . $name . ", Jarak: " . $distance . " km, Biaya: Rp. " . $cost . "\n";
    file_put_contents('data.txt', $entry, FILE_APPEND);

    echo 'Data berhasil disimpan.';
}
?>
