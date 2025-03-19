document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Buttons script loaded!");

    const primaryBtn = document.getElementById("primaryBtn");
    const shakeBtn = document.getElementById("shakeBtn");
    const nightLightBtn = document.getElementById("nightLightBtn");
    const allButtons = document.querySelectorAll(".btn");

    if (!primaryBtn || !shakeBtn || !nightLightBtn) {
        console.error("❌ Some buttons not found in the DOM!");
        return;
    }

    // ✅ Primary Button: Show an alert
    primaryBtn.addEventListener("click", () => {
        alert("Primary Button Clicked!");
        console.log("🔵 Pop-Up Message Button Clicked!");
    });

    // ✅ Shake Button: Make All Buttons Shake for 1 Second
    shakeBtn.addEventListener("click", () => {
        allButtons.forEach(button => {
            button.classList.add("shake");
        });

        console.log("💥 Buttons Shaking!");

        setTimeout(() => {
            allButtons.forEach(button => {
                button.classList.remove("shake");
            });
            console.log("✅ Buttons Stopped Shaking!");
        }, 1000);
    });

    // ✅ Night Light Mode: Apply Warm Tint & Dim Background
    nightLightBtn.addEventListener("click", () => {
        document.body.classList.toggle("night-light");

        if (document.body.classList.contains("night-light")) {
            console.log("🌙 Night Light Mode Activated!");
        } else {
            console.log("☀️ Night Light Mode Deactivated!");
        }
    });
});
