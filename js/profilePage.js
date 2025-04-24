const fileInput = document.getElementById("file-input");
const profileImage = document.getElementById("profile-pic");
const profileButton = document.getElementById("profile-button");

profileButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
        profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});