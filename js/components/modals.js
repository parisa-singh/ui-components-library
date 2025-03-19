document.addEventListener("DOMContentLoaded", () => {
    console.log("Modal script loaded!");

    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");

    if (!modal || !openModalBtn || !closeModalBtn) {
        console.error("❌ Modal elements not found in the DOM!");
        return;
    }

    console.log("✅ Modal elements found!");

    // ✅ Open Modal with Smooth Transition
    openModalBtn.addEventListener("click", () => {
        console.log("🟢 Open Modal Button Clicked!");
        modal.classList.add("show");
        modal.style.visibility = "visible"; // Ensure it's visible
        modal.style.pointerEvents = "all"; // Allow interactions
    });

    // ✅ Close Modal with Smooth Transition
    closeModalBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("🔴 Close Modal Button Clicked!");

        modal.classList.remove("show");
        modal.classList.add("hide");

        // Ensure modal fully disappears after animation
        setTimeout(() => {
            modal.style.visibility = "hidden";
            modal.style.pointerEvents = "none";
            modal.classList.remove("hide"); // Reset animation class
        }, 400);
    });

    // ✅ Close Modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            console.log("⚫ Clicked Outside Modal - Closing...");
            modal.classList.remove("show");
            modal.classList.add("hide");

            setTimeout(() => {
                modal.style.visibility = "hidden";
                modal.style.pointerEvents = "none";
                modal.classList.remove("hide");
            }, 400);
        }
    });
});
