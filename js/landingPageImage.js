window.onload = function() {
    // Set duration of GIF:
    const gifDuration = 3890; // in milliseconds

    // Select image element
    const gifImage = document.getElementById('landing-page-image');

    // Set timer to change image source:
    setTimeout(() => {
        // Change image source to static image
        gifImage.src = 'Graphics/LogoLoop.gif';
        gifImage.alt = "New landing page image";
    }, gifDuration);
};