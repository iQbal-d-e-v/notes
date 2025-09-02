
const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

// Default: Dark Mode (do nothing, since it's in :root)
// If user has light mode saved before, apply it
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "🌙 Dark Mode";
} else {
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }
});

