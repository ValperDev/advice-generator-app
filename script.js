const adviceButton = document.querySelector(".advice__button");
const adviceNumber = document.querySelector(".advice__number");
const adviceQuote = document.querySelector(".advice__quote");

async function fetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const responseJson = await response.json();
        return responseJson;
    } catch(e) {
        console.error(e);
    }
}

async function replaceContent() {
    const response = await fetchAdvice();
    adviceNumber.innerText = response.slip.id;
    adviceQuote.innerText = `"${response.slip.advice}"`;
}

replaceContent();

adviceButton.addEventListener("click", replaceContent);