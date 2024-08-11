// Scroll to section
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}



// Gallery Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryImages = document.querySelector('.gallery-images');
    let index = 0;

    function updateGallery() {
        const totalCards = document.querySelectorAll('.gallery-card').length;
        galleryImages.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : document.querySelectorAll('.gallery-card').length - 1;
        updateGallery();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < document.querySelectorAll('.gallery-card').length - 1) ? index + 1 : 0;
        updateGallery();
    });
});

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.day-card');
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    days.forEach((day, index) => {
        if (index === today) {
            day.classList.add('active');
        }

        day.addEventListener('click', () => {
            // Remove 'active' class from all days
            days.forEach(d => d.classList.remove('active'));

            // Add 'active' class to the clicked day
            day.classList.add('active');

            // Optional: Add any other dynamic behavior here
        });
    });
});

