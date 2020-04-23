window.document.addEventListener('click', event => {
    const number = document.getElementById('js-number');
    const reverseIt = document.getElementById('js-reverseIt');
    const currentInput = event.target;

    const rev = (num) => {
        let res = [];
        let i;
        for (i = num.length - 1; i >= 0; i--) {
            res.push(num[i]);

        }
        res = res.join('');
        return +res;
    }

    const writeAnswer = (turned) => {
        if (number === currentInput) {
            reverseIt.innerHTML = NAME + ", look at this - " + turned;
        }
    }

    const checkInput = () => {
        if (number.checkValidity()) {
            const revers = rev(number.value);
            return writeAnswer(revers);
        } else {
            window.setTimeout(checkInput, 2000);
        }
    }

    checkInput();


});