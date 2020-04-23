window.document.addEventListener('click', event => {
    const radius = document.getElementById('js-radius');
    const sOfCircle = document.getElementById('js-sOfCircle');
    const currentInput = event.target;

    const countS = (rad) => {
        return Math.PI * rad * rad;
    }

    const writeAnswer = (area) => {
        if (radius === currentInput) {
            sOfCircle.innerHTML = NAME + ", area of circle = " + area;
        }
    }

    const checkInput = () => {
        if (radius.checkValidity()) {
            const circleS = countS(radius.value);
            return writeAnswer(circleS);
        } else {
            window.setTimeout(checkInput, 2000);
        }
    }

    checkInput();


});