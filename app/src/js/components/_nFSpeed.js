window.document.addEventListener('click', event => {
    const distance = document.getElementById('js-distance');
    const time = document.getElementById('js-time');
    const nFSpeed = document.getElementById('js-nFSpeed');
    const currentInput = event.target;

    const countS = (d, t) => {
        return d / t;
    }

    const writeAnswer = (speed) => {
        if (distance === currentInput || time === currentInput) {
            nFSpeed.innerHTML = NAME + ", our need for speed = " + speed + " per/hour";
        }
    }

    const checkInput = () => {
        if (distance.checkValidity() && time.checkValidity()) {
            const nfs = countS(distance.value, time.value);
            return writeAnswer(nfs);
        } else {
            window.setTimeout(checkInput, 2000);
        }
    }

    checkInput();


});