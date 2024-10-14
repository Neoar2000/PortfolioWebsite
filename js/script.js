window.onclick = function(event) {
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    if (event.target == modal1) {
        closeModal('modal1');
    }
    if (event.target == modal2) {
        closeModal('modal2');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Create a tooltip element
    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '0.9rem';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.pointerEvents = 'none'; // So it doesn't block clicks
    tooltip.style.zIndex = '1000';
    tooltip.style.opacity = '0'; // Initially hidden
    tooltip.style.transition = 'opacity 0.2s ease';
    tooltip.textContent = 'Click to see more';
    document.body.appendChild(tooltip); // Add to the body

    // Track the mouse movement and position the tooltip
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px'; // Position tooltip 10px to the right of the mouse
            tooltip.style.top = e.pageY + 10 + 'px';  // Position tooltip 10px below the mouse
            tooltip.style.opacity = '1'; // Show the tooltip
        });

        card.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0'; // Hide the tooltip when leaving the card
        });
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal-close'); // Remove close animation if present
    modal.classList.add('modal-open'); // Add open animation
    modal.style.display = "block"; // Ensure modal is visible

    // Apply blur to the background content
    document.querySelector('.content-wrapper').classList.add('blurred'); // Add blur class to content wrapper
    
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal-open'); // Remove open animation
    modal.classList.add('modal-close'); // Add close animation

    // Remove blur immediately when the modal starts closing
    document.querySelector('.content-wrapper').classList.remove('blurred'); // Remove blur class from content wrapper

    // Re-enable scrolling on the body
    document.body.style.overflow = ''; // Allow page scrolling again

    // Delay hiding the modal to allow close animation to finish
    setTimeout(() => {
        modal.style.display = "none";
    }, 400); // Match the duration of the close animation
}

// Variables to track the zoom level and position
let zoomLevel = 1;
const maxZoom = 3; // Maximum zoom level
const minZoom = 1; // Minimum zoom level
const zoomStep = 0.1; // How much to zoom with each step
let isDragging = false; // Track whether the user is dragging the image
let startX = 0, startY = 0; // Store the initial position of the mouse or touch
let translateX = 0, translateY = 0; // Store the image's translation offset

// Function to open the image modal and display the clicked image
function openImageModal(src) {
    const imageModal = document.getElementById('imageModal');
    const expandedImg = document.getElementById('expandedImg');
    expandedImg.src = src; // Set the image source to the clicked image
    imageModal.classList.add('show'); // Add the show class to fade-in the image modal
    resetImagePosition(); // Reset zoom and position on each modal open
}

// Function to close the image modal
function closeImageModal() {
    const imageModal = document.getElementById('imageModal');
    imageModal.classList.remove('show'); // Remove the show class to fade-out the image modal
}

// Reset zoom and position when opening a new image
function resetImagePosition() {
    zoomLevel = 1;
    translateX = 0;
    translateY = 0;
    const expandedImg = document.getElementById('expandedImg');
    expandedImg.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
}

// Function to handle zoom with mouse wheel
document.getElementById('expandedImg').addEventListener('wheel', function(e) {
    e.preventDefault();
    if (e.deltaY < 0 && zoomLevel < maxZoom) {
        // Zoom in
        zoomLevel += zoomStep;
    } else if (e.deltaY > 0 && zoomLevel > minZoom) {
        // Zoom out
        zoomLevel -= zoomStep;
    }
    this.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`; // Apply zoom and keep position
});

// Function to handle panning when zoomed in (mouse drag)
document.getElementById('expandedImg').addEventListener('mousedown', function(e) {
    if (zoomLevel > 1) { // Only allow panning if zoomed in
        isDragging = true;
        startX = e.clientX - translateX; // Record initial X position
        startY = e.clientY - translateY; // Record initial Y position
    }
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        translateX = e.clientX - startX; // Calculate new X position
        translateY = e.clientY - startY; // Calculate new Y position
        document.getElementById('expandedImg').style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`; // Move the image
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false; // Stop dragging when mouse is released
});

// Function to handle panning for touch devices (touch drag)
document.getElementById('expandedImg').addEventListener('touchstart', function(e) {
    if (zoomLevel > 1 && e.touches.length === 1) { // Only allow panning if zoomed in and single touch
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX - translateX; // Record initial X position
        startY = touch.clientY - translateY; // Record initial Y position
    }
});

document.addEventListener('touchmove', function(e) {
    if (isDragging && e.touches.length === 1) { // Only move if single touch
        const touch = e.touches[0];
        translateX = touch.clientX - startX; // Calculate new X position
        translateY = touch.clientY - startY; // Calculate new Y position
        document.getElementById('expandedImg').style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`; // Move the image
    }
});

document.addEventListener('touchend', function() {
    isDragging = false; // Stop dragging when touch ends
});

window.onclick = function(event) {
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    if (event.target == modal1) {
        closeModal('modal1');
    }
    if (event.target == modal2) {
        closeModal('modal2');
    }
};

window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`; // Stagger by 0.2s
        card.classList.add('fade-in'); // Add fade-in class to trigger animation
    });
});