document.addEventListener("DOMContentLoaded", function() {
    
    // Select all images within the bannerImages section
    const bannerSection = document.getElementById('bannerImages');
    const images = bannerSection.getElementsByTagName('img');

    // Function to preload images
    function onPageLoad(loadedImages) {
        for (let i = 0; i < loadedImages.length; i++) {
            const img = new Image();
            img.src = loadedImages[i].src;

            //onload and onerror to test functionality
            img.onload = function() {
                console.log(`Image ${loadedImages[i].src} loaded successfully.`);
            };
            img.onerror = function() {
                console.log(`Failed to load image ${loadedImages[i].src}.`);
            };
        }//end of For-loop
    }//end of onPageLoad

    onPageLoad(images);

    //Select all the images in bannerImages
    const bannerImages = document.querySelectorAll('#bannerImages img');
    var bannerIndex = 0;

    function bannerDisplay(bannerIndex) {
        for (var i = 0; i < bannerImages.length; i++) {
            if (i === bannerIndex) {
                bannerImages[i].style.display = 'block';
            } else {
                bannerImages[i].style.display = 'none';
            }
        }
    }//end of showImage

    function bannerCycle() {
        bannerDisplay(bannerIndex);
        bannerIndex = (bannerIndex + 1) % bannerImages.length;
        setTimeout(bannerCycle, 3000); // Change image every 3 seconds
    }//end of cycleImages

    bannerCycle();

});//end of DOM

