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