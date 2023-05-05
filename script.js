const apiUrl = `https://api.adviceslip.com/advice`;
const adviceElement = document.getElementById('quote');
const idElement = document.getElementById('id');
const buttonElement = document.querySelector('button');

const getAdvice = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const advice = data.slip.advice;
        const id = data.slip.id;
        adviceElement.textContent = `"${advice}"`;
        idElement.textContent = `Advice #${id}`;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}

buttonElement.addEventListener('click', getAdvice);
getAdvice();
