// Function to open the modal and display the image with its description
function openImage(imageSrc, description) {
  document.getElementById("modal-image").src = imageSrc;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("image-modal").style.display = "flex";
}

// Function to close the modal
function closeImage() {
  document.getElementById("image-modal").style.display = "none";
}
