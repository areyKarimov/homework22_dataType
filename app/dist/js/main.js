window.document.addEventListener('click', event => {
    const dateOfBirth = document.getElementById('js-dateOfBirth');
    const currentDate = new Date().getTime();
    const answereOnAge = document.getElementById('js-age');
    const currentInput = event.target;

    const countAge = (birthDate) => {
        const birthDateParse = Date.parse(birthDate);
        const age = (currentDate - birthDateParse);
        return Math.floor(age / 31536000000);
    }

    const writeAnswer = (yourAge) => {
        if (dateOfBirth === currentInput) {
            if (yourAge > 3 && yourAge < 18) {
                return answereOnAge.innerHTML = NAME + ", sorry, but you very young for our relationship, let's return to this conversation when you will 18 years old...";
            } else if (yourAge > 18 && yourAge < 40) {
                return answereOnAge.innerHTML = NAME + ", let's continue our communication in other tabs =)";
            } else if (yourAge >= 40 && yourAge < 100) {
                return answereOnAge.innerHTML = NAME + ", i think that you too much aged for me...";
            } else if (yourAge > 100) {
                return answereOnAge.innerHTML = NAME + ", are you still alive?!";
            } else if (yourAge > 0 && yourAge <= 3) {
                return answereOnAge.innerHTML = NAME + ", don't lie to me, you can't write... Stop, are you " + NAME + " !?...";
            } else {
                return answereOnAge.innerHTML = NAME + ", something went wrone.. Repick date please=)";
            }
        }
    }

    const checkInput = () => {
        if (dateOfBirth.checkValidity()) {
            const userAge = countAge(dateOfBirth.value);
            return writeAnswer(userAge);
        } else {
            window.setTimeout(checkInput, 100);
        }
    }

    checkInput();


});
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
window.document.addEventListener('click', event => {
    const volume = document.getElementById('js-volume');
    const flashVolume = document.getElementById('js-flashVolume');
    const currentInput = event.target;
    const filmVolume = 820;

    const convert = (vol) => {
        return Math.floor(vol * 1024 / filmVolume);
    }

    const writeAnswer = (volumeOfFlash) => {
        if (volume === currentInput) {
            flashVolume.innerHTML = NAME + ", i'm going to write " + volumeOfFlash + " films";
        }
    }

    const checkInput = () => {
        if (volume.checkValidity()) {
            const size = convert(volume.value);
            return writeAnswer(size);
        } else {
            window.setTimeout(checkInput, 2000);
        }
    }

    checkInput();


});
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
const TABS = document.querySelectorAll('.nav__link');
const WRAPPERS = document.querySelectorAll('.wrapper__inner');

const removeActiveClasses = () => {
    for (let i of[...TABS]) {
        i.classList.remove('active');
    }
    for (let i of[...WRAPPERS]) {
        i.classList.remove('active');
    }
}


window.document.addEventListener('click', event => {
    let currentTab = event.target.parentElement;
    let indCurrentTab = [...TABS].indexOf(currentTab);
    if ([...TABS].includes(currentTab)) {
        removeActiveClasses();
        currentTab.classList.add('active');
        [...WRAPPERS][indCurrentTab].classList.add('active');
    }
});
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
const NAME = prompt("What's your name?=", 'noname');
const nameRequest = () => {
    const span = document.getElementsByTagName("span");
    const container = document.querySelector('.container');
    for (var i = 0; i < [...span].length; i++) {
        if (span[i].innerHTML === 'noname') {
            span[i].innerHTML = NAME;
        };
    };
    container.style.opacity = '1';
}
if (document.readyState = 'complete') {
    nameRequest();
}
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