const result = document.getElementById('screen')
var root = document.querySelector(':root');
let darkmode=true;

function addR(value){
    result.value= result.value + value;
}

function clean() {
    result.value ="";
}

function calculate(){
    const x = eval(result.value);
    result.value = x;
}

function backspace() { 
    bck = document.getElementById('screen').value;
    document.getElementById('screen').value = bck.substring(0,bck.length -1);
}



function switchmode(){
    if (darkmode===true) { 
        root.style.setProperty('---color-text','#000')
        root.style.setProperty('--color-bg', '#F7F7F7')
        root.style.setProperty('--color-screen', '#F7F7F7')
    }


    if (darkmode===false) { 
        root.style.setProperty('---color-text','#fff')
        root.style.setProperty('--color-bg', '#1E1E1E')
        root.style.setProperty('--color-screen', '#202020')
    }
}

function flipmode(){
    darkmode=!darkmode;
}

// --color-white:#ffffff;
// --color-light:#f0eff5;
// --color-gray-light:#86848c;
// --color-gray-dark:#56555e;
// --color-dark:#27282f;