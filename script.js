document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryCards = document.querySelectorAll(".gallery-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      galleryCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hidden");

          card.style.animation = "none";
          card.offsetHeight;
          card.style.animation = null;
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
