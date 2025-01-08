document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const imageUrl = card.getAttribute('data-image');
        const eventDate = card.querySelector('.event-date');
        eventDate.style.backgroundColor = 'transparent';
        eventDate.style.backgroundImage = `url('${imageUrl}')`;
        eventDate.style.backgroundSize = 'cover';
        eventDate.style.backgroundPosition = 'center';
        card.classList.add('hover');
    });

    card.addEventListener('mouseleave', () => {
        const eventDate = card.querySelector('.event-date');
        eventDate.style.backgroundColor = ''; 
        eventDate.style.backgroundImage = ''; 
        card.classList.remove('hover');
    });
});
