let currentScore = 0;
let playing = false;
let shape1;
let shape2;

const shapes = [
    {color: '#FF595E', width: 250, height: 160},
    {color: '#FF595E', width: 270, height: 150},
    {color: '#FFCA3A', width: 320, height: 170},
    {color: '#FFCA3A', width: 310, height: 180},
    {color: '#8AC926', width: 380, height: 160},
    {color: '#8AC926', width: 300, height: 175},
    {color: '#1982C4', width: 400, height: 185},
    {color: '#1982C4', width: 250, height: 120},
    {color: '#6A4C93', width: 440, height: 160},
    {color: '#6A4C93', width: 250, height: 160},
];

const selectRandomShape = () => {
    const randomNumber = Math.floor(Math.random()*shapes.length);
    const randomSelection = shapes[randomNumber];
    return randomSelection;
}

const repeatRandomShape = () => {
setInterval(() => {
    shape1 = selectRandomShape();
    shape2 = selectRandomShape();
    console.log(shape1);
    console.log(shape2);
}, 1000); 
}

//start game
document.getElementById('play').onclick = () =>{
    repeatRandomShape();
}
