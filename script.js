const cards = document.querySelectorAll(".special-card, .menu-card");

const cardObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("card-show");

                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.2
    }
);

cards.forEach((card) => {
    cardObserver.observe(card);
});