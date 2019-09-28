const saleButton = document.querySelector('button');

const popup = document.querySelector('.popup-section');

const closeButton = document.querySelector('.popup-close');

// JS for clicking sale button
saleButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// JS for clicking close button
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});