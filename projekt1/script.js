const lightModeButton = document.getElementById("light-mode");
const darkModeButton = document.getElementById("dark-mode");
const body = document.body;

lightModeButton.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
});

darkModeButton.addEventListener("click", () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
});
