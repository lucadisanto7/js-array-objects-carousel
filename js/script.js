const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const mainImg = document.getElementById('main-img');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
const thumbnails = document.querySelector('.thumbnails');

let currentIndex = 0;

const updateMainImage = () => {
    const { image, title, text } = images[currentIndex];
    mainImg.src = image;
    mainImg.alt = title;
    mainTitle.textContent = title;
    mainText.textContent = text;
};

const createThumbnails = () => {
    images.forEach((item, index) => {
        const thumbnailItem = document.createElement('div');
        thumbnailItem.className = 'thumbnail-item';
        if (index === currentIndex) thumbnailItem.classList.add('active');

        thumbnailItem.innerHTML = `<img src="${item.image}" alt="${item.title}">`;

        thumbnailItem.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage();
        });

        thumbnails.appendChild(thumbnailItem);
    });
};

document.getElementById('next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateMainImage();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateMainImage();
});

// Initialize thumbnails and main image
createThumbnails();
updateMainImage();