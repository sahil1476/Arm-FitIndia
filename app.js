const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
//img anim
const animationContainer = document.querySelector('#animation-container');
const images = animationContainer.querySelectorAll('img');

let currentImageIndex = 0;

setInterval(() => {
    // Get the current image.
    const currentImage = images[currentImageIndex];

    // Remove the `.active` class from the current image.
    currentImage.classList.remove('active');

    // Increment the current image index.
    currentImageIndex++;

    // If the current image index is greater than or equal to the number of images, reset it to 0.
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // Get the next image.
    const nextImage = images[currentImageIndex];

    // Add the `.active` class to the next image.
    nextImage.classList.add('active');
}, 2500); // Animate the images every 1000 milliseconds (1 second).