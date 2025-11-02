function generateQuote(event) { 
    event.preventDefault();
    let userInstructions = document.getElementById("user-instructions");
    let prompt = `Generate an inspirational quote about ${userInstructions.value}.`;
    let context = "Provide a motivational quote that encourages people to keep going despite challenges. Make sure to follow user-instructions.";
    let apiKey = "40675f30to27bd8672dd0d3a955939bf";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

};
function displayQuote(response) {
    let quote = response.data.choices[0].text;
    let quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.innerHTML = `<div class="result-text">${quote}</div>`;
}
 axios.get(apiUrl).then(displayQuote);
 
let quoteForm = document.getElementById("quote-form");
quoteForm.addEventListener("submit", generateQuote);





