const adviceSlipURL = 'https://api.adviceslip.com/advice';
const adviceNumber = document.querySelector('#advice-id');
const adviceQuote = document.querySelector('#advice-text');
const diceBtn = document.querySelector('#new-advice');

async function generateAdvice() {

  adviceNumber.innerHTML = ` `;
  adviceQuote.innerHTML = `Loading...`;

  try {
    const response = await fetch(adviceSlipURL);
    const data = await response.json();

    adviceNumber.innerHTML = `${data.slip.id}`;
    adviceQuote.innerHTML = `${data.slip.advice}`;

  } catch(error) {
    console.log(error);
    adviceNumber.innerHTML = `404`;
    adviceQuote.innerHTML = `Sorry, something went wrong. Try again.`;
  }
}

generateAdvice();

diceBtn.addEventListener('click', () => {
  generateAdvice();
});  
