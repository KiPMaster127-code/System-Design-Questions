document.getElementById("surveyForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const message = document.getElementById("message");
    const formData = new FormData(this);
    const jsonData = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("https://formspree.io/f/xzedpljp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(jsonData)
        });

        if (response.ok) {
            message.textContent = "Thank you for your feedback, your survey has been submitted. Have a great day!!!";
            message.classList.remove("hidden");
            message.style.color = "green";
            this.reset();
        } else {
            message.textContent = "There was an error sending your survey, try again";
            message.classList.remove("hidden");
            message.style.color = "red";
        }

    } catch (error) {
        message.textContent = "Network error. Please try again";
        message.classList.remove("hidden");
        message.style.color = "red";
    }
});
