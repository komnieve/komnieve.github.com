document.addEventListener('DOMContentLoaded', () => {
    // This is where you can add more interactive features and animations

    console.log('Hatcherii Interactive Landing Page Script Loaded');
});


document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const pane2 = document.getElementById('pane2');
        
        // Check if Pane 2 is in view
        if (window.innerHeight + window.scrollY >= pane2.offsetTop) {
            // Logic to handle the transition to Pane 2
        }
    });
});