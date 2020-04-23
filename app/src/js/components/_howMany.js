window.document.addEventListener('click', event => {
    const money = document.getElementById('js-money');
    const plates = document.getElementById('js-plates');
    const howMany = document.getElementById('js-howMany');
    const currentInput = event.target;

    const countPlates = (m, p) => {
        return Math.floor(m / p);
    }

    const changeOfChocolate = (m, p) => {
        return m % p;
    }

    const writeAnswer = (platesOfCho, changeOfPlates) => {
        if (money === currentInput || plates === currentInput) {
            if (platesOfCho < 1) {
                howMany.innerHTML = NAME + ", you have not enough money for chocolate";
                console.log(money.value)
                console.log(plates.value)
            } else if (changeOfPlates === 0) {
                howMany.innerHTML = NAME + ", i can by on your money " + platesOfCho + " plates of chocolate";
            } else {
                howMany.innerHTML = NAME + ", i can by on your money " + platesOfCho + " plates of chocolate and you'll deliver " + changeOfPlates + "of change";
            }
        }
    }

    const checkInput = () => {
        if (money.checkValidity() && plates.checkValidity()) {
            const peace = countPlates(money.value, plates.value);
            const change = changeOfChocolate(money.value, plates.value)
            return writeAnswer(peace, change);
        } else {
            window.setTimeout(checkInput, 2000);
        }
    }

    checkInput();


});