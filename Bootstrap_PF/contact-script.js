document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = form.querySelector("#name").value;
        const email = form.querySelector("#email").value;
        const message = form.querySelector("#message").value;
        
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Message sent successfully!");
            form.reset();
        }
    });
});
