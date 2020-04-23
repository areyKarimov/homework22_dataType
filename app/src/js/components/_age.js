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