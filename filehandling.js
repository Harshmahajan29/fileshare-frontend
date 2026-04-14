const fileInput = document.getElementById("file");

async function uploadFile(){

    const code = document.getElementById("code").innerText.trim(); // move here

    const file = fileInput.files[0];

    if(!file){
        alert("Please select a file to upload.");
        return;
    }

    if(code === ""){
        alert("Please generate the code first.");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);
    formData.append("accessCode", code);

    let response = await fetch("http://localhost:8081/upload", {
        method: "POST",
        body: formData
    });

    const result = await response.text();
    alert(result);
}

const uploadBtn = document.getElementById("upload");
uploadBtn.addEventListener("click", uploadFile);