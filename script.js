document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById("imageModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const img = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = "block";
            img.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    },

    // When the user clicks anywhere outside of the image, close it
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});