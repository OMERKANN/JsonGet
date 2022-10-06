const jokeText = document.getElementById("joke");
const button = document.getElementById("btnJoke");

generateJoke()

button.addEventListener("click", generateJoke)

function generateJoke(){
 
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    fetch ('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeText.innerHTML = data.joke
        })
}