const URL = "http://localhost:8081";

let generateCodeBtn = document.getElementById("generateCodeButton");
generateCodeBtn.addEventListener("click", generateCode);

async function generateCode(){
    const response = await fetch(URL + "/generatedCode", {
        method: "GET"
    });
    const data = await response.json();
    document.getElementById("code").innerText = data;
}


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