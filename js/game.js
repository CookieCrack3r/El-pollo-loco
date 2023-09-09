let canvas;
let world ;
let keyboar = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My Character', world);
}

window.addEventListener("keypress", (event) => {
    console.log(event);
});