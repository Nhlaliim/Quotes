let quoteForm = document.getElementById("quote-form");
quoteForm.addEventListener("submit", generateQuote);

let apiKey = "40675f30to27bd8672dd0d3a955939bf";
let prompt = "Generate an inspirational quote about perseverance.";
let context = "Provide a motivational quote that encourages people to keep going despite challenges.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayQuote);

function generateQuote(event) { 
    event.preventDefault();
   
};
function displayQuote(response) {
    let quote = response.data.choices[0].text;
    let quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.innerHTML = `<p>${quote}</p>`;
}