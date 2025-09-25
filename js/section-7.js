// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Define all available icons (only frontend ones provided)
    const allIcons = [
        { src: "Images/logos/angular.webp", alt: "Angular" },
        { src: "Images/logos/antidesign.webp", alt: "Ant Design" },
        { src: "Images/logos/bootstrap.webp", alt: "Bootstrap" },
        { src: "Images/logos/css.webp", alt: "CSS" },
        { src: "Images/logos/html.webp", alt: "HTML" },
        { src: "Images/logos/jquery.webp", alt: "jQuery" },
        { src: "Images/logos/js.webp", alt: "JavaScript" },
        { src: "Images/logos/nextjs.webp", alt: "Next.js" },
        { src: "Images/logos/react.webp", alt: "React" },
        { src: "Images/logos/redux.webp", alt: "Redux" },
        { src: "Images/logos/requirejs.webp", alt: "RequireJS" },
        { src: "Images/logos/sass.webp", alt: "Sass" },
        { src: "Images/logos/tailwind.webp", alt: "Tailwind CSS" },
        { src: "Images/logos/typescript.webp", alt: "TypeScript" },
        { src: "Images/logos/vuejs.webp", alt: "Vue.js" }
    ];

    // Shuffle function
    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Duplicate icons to increase the number, maintaining the same set
    const extendedIcons = [
        ...allIcons,
        ...allIcons.map(icon => ({ ...icon })), // Duplicate once
        ...allIcons.map(icon => ({ ...icon })), // Duplicate twice
        ...allIcons.map(icon => ({ ...icon })), // Duplicate thrice
        ...allIcons.map(icon => ({ ...icon }))  // Duplicate four times
    ].slice(0, 150); // Cap at 150 to allow distribution

    // Shuffle the extended icons randomly
    const shuffledIcons = shuffle(extendedIcons);

    // Define category names
    const categoryNames = [
        'backend', 'frontend', 'data', 'quality', 'mobile',
        'cloud', 'digital', 'ecommerce', 'project'
    ];

    // Distribute icons to categories, ensuring frontend and backend get at least 3 rows (assuming 5 icons per row, 15 icons minimum)
    const techIcons = {};
    categoryNames.forEach(cat => {
        techIcons[cat] = [];
    });

    let iconIndex = 0;
    // Allocate 15 icons to frontend and backend for 3 rows (assuming 5 icons per row)
    ['frontend', 'backend'].forEach(cat => {
        for (let i = 0; i < 15 && iconIndex < shuffledIcons.length; i++) {
            techIcons[cat].push(shuffledIcons[iconIndex]);
            iconIndex++;
        }
    });

    // Distribute remaining icons to other categories, max 10 per category
    let catIndex = 0;
    while (iconIndex < shuffledIcons.length) {
        const cat = categoryNames[catIndex];
        if (cat !== 'frontend' && cat !== 'backend' && techIcons[cat].length < 10) {
            techIcons[cat].push(shuffledIcons[iconIndex]);
            iconIndex++;
        }
        catIndex = (catIndex + 1) % categoryNames.length;
    }

    // Get DOM elements
    const buttons = document.querySelectorAll('.cards-btn');
    const techGrid = document.getElementById('tech-grid');

    // Function to update grid content
    function updateGrid(category) {
        if (!techGrid) {
            console.error('Tech grid element not found');
            return;
        }
        techGrid.innerHTML = ''; // Clear current grid
        const icons = techIcons[category] || [];
        icons.forEach(icon => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = icon.src;
            img.alt = icon.alt;
            img.onerror = () => console.error(`Failed to load image: ${icon.src}`);
            div.appendChild(img);
            techGrid.appendChild(div);
        });
    }

    // Add click event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update grid with the selected category's icons
            const category = button.getAttribute('data-category');
            if (category) {
                updateGrid(category);
            } else {
                console.error('No data-category attribute found on button');
            }
        });
    });

    // Initialize with frontend category
    updateGrid('frontend');
});