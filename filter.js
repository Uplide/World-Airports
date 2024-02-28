const fs = require('fs');
let airports = require('./airports.json');

const filterCountry = 'GB';

airports = airports.filter((airport) =>
    airport.iso_country === filterCountry
);


fs.writeFile(`airports-${filterCountry}.json`, JSON.stringify(airports, null, 2), (err) => {
    if (err) {
        console.error('Hata:', err);
        return;
    }
    console.log('JSON dosyası başarıyla oluşturuldu.');
});
