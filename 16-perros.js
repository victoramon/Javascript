const $btnDog = document.querySelector ('#btnDog');
const $divDogs = document.querySelector ('#dogs');

$btnDog.addEventListener ('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then (resp => resp.json()) .then(data => {
            console.log(data);
            const imgDog = document.createElement ('img');
            imgDog.src = data.message;
            imgDog.width = 300;
            $divDogs.appendChild(imgDog);
        });
    });