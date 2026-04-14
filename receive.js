const downloadBtn = document.getElementById("downloadBtn");
const BASE_URL = "http://localhost:8081";

downloadBtn.addEventListener("click", () => {

    const codeInput = document.getElementById("code");
    const code = codeInput.value.trim();

    if (!code) {
        alert("Please enter the access code.");
        return;
    }

    // Browser directly downloads the file
    window.location.href = `${BASE_URL}/download/${code}`;

});