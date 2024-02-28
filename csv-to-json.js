const fs = require('fs');
const csv = require('csv-parser');

// CSV dosyasının adı
const csvFilePath = 'airports.csv';

// JSON dosyasının adı
const jsonFilePath = 'airports.json';

// Boş bir dizi oluştur
let jsonData = [];

// CSV dosyasını oku ve JSON formatına dönüştür
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => jsonData.push(data))
    .on('end', () => {
        // JSON dosyasına yaz
        fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Hata:', err);
                return;
            }
            console.log('JSON dosyası başarıyla oluşturuldu.');
        });
    });