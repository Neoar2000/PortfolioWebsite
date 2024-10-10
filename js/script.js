// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.classList.add("modal-open"); // Add class to body to trigger blur
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.classList.remove("modal-open"); // Remove blur effect
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    if (event.target == modal1) {
        closeModal('modal1');
    }
    if (event.target == modal2) {
        closeModal('modal2');
    }
}
