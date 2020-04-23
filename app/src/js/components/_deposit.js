window.document.addEventListener('click', event => {
    const amount = document.getElementById('js-amount');
    const deposit = document.getElementById('js-deposit');
    const currentInput = event.target;

    const countProcent = (value) => {
        return value * 0.05 / 6;
    }

    const writeAnswer = (procent) => {
        if (amount === currentInput) {
            deposit.innerHTML = NAME + ", and it's all - " + procent;
        }
    }

    const checkInput = () => {
        if (amount.checkValidity()) {
            const benefit = countProcent(amount.value);
            return writeAnswer(benefit);
        } else {
            window.setTimeout(checkInput, 3000);
        }
    }

    checkInput();


});