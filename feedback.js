const feedback = document.getElementById("feedbackMessage");
const submitBtn = document.getElementById("submitFeedback");

submitBtn.addEventListener("click", submitFeedback);

async function submitFeedback(){

    const feedbackMessage = feedback.value;
    if(feedbackMessage.trim() === ""){
        alert("Please enter your feedback before submitting.");
        return;
    }

    const response = await fetch("http://localhost:8081/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "feedback=" + encodeURIComponent(feedbackMessage)
    });

    if(response.ok){
        alert("Feedback submitted successfully");
        feedback.value = "";
    } 
    else{
        alert("Failed to submit feedback");
    }
}