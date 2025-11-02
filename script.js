let quoteForm = document.getElementById("quote-form");
quoteForm.addEventListener("submit", generateQuote);

function generateQuote(event) { 
    event.preventDefault();
    let formData = new FormData(quoteForm);
    let topic = formData.get("topic");
    // Call the API to generate a quote based on the topic
};