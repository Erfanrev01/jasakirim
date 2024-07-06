document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const distance = document.getElementById('distance').value;
    const cost = distance * 15000;

    document.getElementById('resultName').textContent = `Nama: ${name}`;
    document.getElementById('result').textContent = `Jarak: ${distance} km, Biaya Pengiriman: Rp. ${cost}`;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('distance', distance);
    formData.append('cost', cost);

    fetch('save_data.php', {
        method: 'POST', 
        body: formData
    });
});
