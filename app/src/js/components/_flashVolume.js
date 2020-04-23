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