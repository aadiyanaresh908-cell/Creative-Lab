document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    // --- 1. Interactive Glow Effect ---
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            
            // Calculate mouse position relative to the element
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set the CSS variables dynamically
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // --- 2. Dynamic Filtering Logic ---
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI: Update active button state
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    // Trigger a tiny animation
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});