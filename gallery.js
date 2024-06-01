document.addEventListener("DOMContentLoaded", function() {
    // Select all images within the bannerImages section
    const bannerSection = document.getElementById('gallery');
    const images = bannerSection.getElementsByTagName('img');

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
        }
    }//end of onPageLoad

    onPageLoad(images);


    var thumbnails = document.querySelectorAll('.thumbnail');//finds all the nodes in the class "thumbnail"

    thumbnails.forEach(function (thumbnail) { //Each node found in thumbnails will be changed by the following functions

        thumbnail.addEventListener('mouseenter', function () { //Each node in thumbnail will be changed when the mouseenters
            this.style.transform = 'scale(1.1)';
        });

        thumbnail.addEventListener('mouseleave', function () { //Each node in thumbnail will be changed when the mouseleaves
            this.style.transform = 'scale(1)';
        });

    });//end of the function

});//End of onPageLoad