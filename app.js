const adviceSlipURL = 'https://api.adviceslip.com/advice';
const adviceNumber = document.querySelector('#advice-id');
const adviceQuote = document.querySelector('#advice-text');
const diceBtn = document.querySelector('#new-advice');

async function generateAdvice() {
  adviceNumber.innerText = ``;
  adviceQuote.innerText = `Loading...`;

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

// Initial Advice Quote
adviceNumber.innerText = `117`;
adviceQuote.innerText = `It is easy to sit up and take notice, what's difficult is getting up and taking action.`;

diceBtn.addEventListener('click', generateAdvice);  
