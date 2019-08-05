/*{ State Variables }*/
let sum;

/*{ Cached Elements }*/
const count = document.querySelector('#count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const input = document.querySelector('input');

/*{ JS }*/
initialize();

/*{ Event Listeners}*/
minusButton.addEventListener('click', minus);
plusButton.addEventListener('click', add);


/*{ Functions }*/
function initialize(){
    count.textContent='0';
    input.value='1';
    sum = 0;
}

function render() {
    count.textContent=sum;
    count.style.color = sum < 0 ? 'red' : 'black';
}

function add() {
    sum += parseFloat(input.value);
    render();
}

function minus() {
    sum -= parseFloat(input.value);
    render();
}