window.document.addEventListener('click', event => {
    const dollars = document.getElementById('js-dollars');
    const convertIt = document.getElementById('js-convertIt');
    const currentInput = event.target;
    const EURO = 0.92;

    const convert = (currency) => {
        return currency * EURO;
    }

    const writeAnswer = (euro) => {
        if (dollars === currentInput) {
            convertIt.innerHTML = NAME + ", you are dreaming about " + euro + " euros";
        }
    }

    const checkInput = () => {
        if (dollars.checkValidity()) {
            const value = convert(dollars.value);
            return writeAnswer(value);
        } else {
            window.setTimeout(checkInput, 3000);
        }
    }

    checkInput();


});