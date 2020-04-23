window.document.addEventListener('click', event => {
    const squareSide = document.getElementById('js-squareSide');
    const pOfSquare = document.getElementById('js-pOfSquare');
    const currentInput = event.target;

    const countP = (lenght) => {
        return lenght * 4;
    }

    const writeAnswer = (perimetr) => {
        if (squareSide === currentInput) {
            pOfSquare.innerHTML = NAME + ", perimetr of square = " + perimetr;
        }
    }

    const checkInput = () => {
        if (squareSide.checkValidity()) {
            const SquareP = countP(squareSide.value);
            return writeAnswer(SquareP);
        } else {
            window.setTimeout(checkInput, 2000);
        }
    }

    checkInput();


});