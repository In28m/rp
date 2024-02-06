function showMorePhotos() {
    var newPhotos = [
        { src: '/Foto/balta vonia3.jpg', description: 'Naujas aprašymas 1' },
        { src: '/Foto/balta vonia4.jpg', description: 'Naujas aprašymas 2' },
        { src: '/Foto/baltaVonia.jpg', description: 'Naujas aprašymas 3' },
        { src: '/Foto/baltaVonia2.jpg', description: 'Naujas aprašymas 4' },
        { src: '/Foto/kriaukle.jpg', description: 'Naujas aprašymas 5' },
        { src: '/Foto/kriaukle3.jpg', description: 'Naujas aprašymas 6' },
        { src: '/Foto/kriaukle4.jpg', description: 'Naujas aprašymas 7' },
        { src: '/Foto/mamur vonia.jpg', description: 'Naujas aprašymas 8' },
        { src: '/Foto/mamur wc and vonia.jpg', description: 'Naujas aprašymas 9' },
        { src: '/Foto/pilka kriaukle.jpg', description: 'Naujas aprašymas 10' },
        
    ];

    var cards = document.querySelectorAll('.card');

    // Keičiame kiekvienos kortelės nuotraukas ir aprašymus
    cards.forEach(function(card, index) {
        // Tikriname, ar masyve yra duomenų šiai kortelei
        if (index < newPhotos.length) {
            var photo = newPhotos[index];
            card.querySelector('img').src = photo.src;
            card.querySelector('p').innerText = photo.description;
        }
    });
}
