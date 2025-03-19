import "./components/buttons.js";
import "./components/modals.js";
import "./components/accordions.js";

console.log("UI Component Library Initialized!");

document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Accordion functionality
    const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("active");
            if (this.nextElementSibling.style.display === "block") {
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block";
            }
        });
    });
});
