document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Accordion script loaded!");

    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Close all accordions first
            accordionButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove("active");
                    btn.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked accordion
            button.classList.toggle("active");
            const content = button.nextElementSibling;

            if (button.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});
