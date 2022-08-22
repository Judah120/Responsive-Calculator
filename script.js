let outputScreen = document.getElementById('output-screen')

function display(num) {
    outputScreen.value += num;
}

function percent() {
    outputScreen.value = outputScreen.value / 100;
}
function calculate() {
    try { outputScreen.value = eval(outputScreen.value);} 
         catch(err) {
            alert('E no fit go')
         }
     }
function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0,-1);
}