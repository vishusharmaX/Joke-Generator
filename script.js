

onst jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const generateJokes = async () => {
    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }
    try {
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(`the error is ${error}`);
    }
}

jokebtn.addEventListener('click', generateJokes);
generateJokes();















