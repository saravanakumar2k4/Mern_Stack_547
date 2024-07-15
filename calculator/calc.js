var disp = document.getElementById("display");

function appendTODisplay(value){
    disp.value += value;
}

function cle(){
    disp.value="";
}

function calculate(){
    var equation = disp.value;
    // disp.value = eval(equation);
    try{
        disp.value=eval(equation);

    }catch(e){
        disp.value='poda dai';
    }
}

function backspace(){
    var equation=disp.value
    equation=equation.slice(0,equation.length-1)
    disp.value=equation
}

