function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal-close');
    modal.classList.add('modal-open'); // Open modal with animation
    modal.style.display = "block"; // Ensure the modal is visible
    setTimeout(() => {
        modal.style.visibility = "visible"; // Set visibility after display block
    }, 1); // Small delay to ensure visibility change works properly
    document.body.classList.add('modal-open'); // Apply background blur
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal-open'); // Remove open class for animation
    modal.classList.add('modal-close'); // Add close class for animation
    setTimeout(() => {
        modal.style.display = "none"; // Hide modal after closing animation
        modal.style.visibility = "hidden"; // Hide visibility after animation
        document.body.classList.remove('modal-open'); // Remove background blur
    }, 400); // Match animation duration
}

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
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('modal-open'); // Remove open animation
    modal.classList.add('modal-close'); // Add close animation
    
    // Delay hiding the modal to allow close animation to finish
    setTimeout(() => {
        modal.style.display = "none";
    }, 400); // Match the duration of the close animation
}

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