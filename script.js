// script.js
document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = document.getElementById('distance').value;
    const cost = distance * 15000;

    document.getElementById('result').textContent = `Biaya Pengiriman: Rp. ${cost}`;

    // Mengirim data ke PHP untuk disimpan ke file .txt
    fetch('save_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ distance: distance, cost: cost })
    });
});
