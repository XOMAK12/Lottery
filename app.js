function randomNumbers(count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * 99) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function generateNumbers() {
    const numbersContainer = document.querySelector('#numbersContainer');
    numbersContainer.innerHTML = '';

    const numbers = randomNumbers(6);

    for (let number of numbers) {
        const numberItem = document.createElement('li');
        numberItem.innerText = number.toString().padStart(2, '0');
        numbersContainer.append(numberItem);
    }
}
const button = document.querySelector("#button");
button.addEventListener("click", generateNumbers)
