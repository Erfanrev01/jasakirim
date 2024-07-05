<?php
// save_data.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $distance = $data['distance'];
    $cost = $data['cost'];

    $entry = "Jarak: " . $distance . " km, Biaya: Rp. " . $cost . "\n";
    file_put_contents('data.txt', $entry, FILE_APPEND);

    echo json_encode(['status' => 'success']);
}
?>
