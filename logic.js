const URL = "http://localhost:8081";

let copyBtn = document.getElementById("copyCode");
copyBtn.addEventListener("click", copyCode);

async function copyCode(){
const codeText = document.getElementById("code").innerText;
if(codeText.trim() === ""){
    alert("No code to copy!");
    return;
}
try{
    await navigator.clipboard.writeText(codeText);
    alert("Code copied to clipboard!");
}
catch(err){
    alert("Failed to copy code: " + err);
}
}

let code = document.getElementById("code");

let btn = document.getElementById("upload");
btn.addEventListener("click", uploadFile);
async function uploadFile() {
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(URL + "/upload", {
        method: "POST",
        body: formData
    })
    if (response.ok) {
        alert("File uploaded successfully");
    } else {
        alert("Upload failed");
    }
}

const button = document.getElementById("generateCodeButton");
button.addEventListener("click", generateCode);

async function generateCode() {
    const response = await fetch(URL + "/generatedCode", {
        method: "GET"
    })

    const data = await response.json();
    code.innerText = data;
}