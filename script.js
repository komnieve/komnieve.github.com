document.addEventListener('DOMContentLoaded', () => {
    console.log('Hatcherii Interactive Landing Page Script Loaded');

    // Handling Pane 2 visibility on scroll
    window.addEventListener('scroll', () => {
        const pane2 = document.getElementById('pane2');
        if (pane2 && window.innerHeight + window.scrollY >= pane2.offsetTop) {
            // Logic to handle the transition to Pane 2
        }
    });

    // Handling header visibility on scroll
    const header = document.getElementById("myHeader");
    let headerVisible = false; // Track if header has been shown

    window.addEventListener('scroll', () => {
        console.log("Scroll event detected");
        if (header) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                header.classList.add("visible");
                headerVisible = true; // Header is now visible
            } else if (!headerVisible) {
                // Hide header only if it hasn't been shown yet
                header.classList.remove("visible");
            }
        }
    });
});
