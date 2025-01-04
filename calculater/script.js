const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.target;
        if (target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        }
        else if (target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        }
        else if (target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += target.innerHTML;
            input.value = string;
        }
    });
});
