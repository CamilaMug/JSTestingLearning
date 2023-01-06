// index.html
function testFunction () {
    document.getElementById("test").innerHTML= "Modified by an external page";
}

function generateOutput() {
    document.getElementById("output").innerHTML= "This is an output";
}

function generateSum () {
    document.write(12+6);
}

function warningConsole () {
console.log(12+6);
console.error("warning");
}

function warningMesagge() {
    document.getElementById("mesagge").innerHTML="There is nothing to submit";
}

// programming statements.html
function letsSeeVariables1() {
    var a,b,c;
    a = 1;
    b = 2;
    c = a+b;

    document.getElementById("test1").innerHTML = c;
}

function letsSeeVariables2() {
    var x;
    x = 9;

    document.getElementById("test2").innerHTML = x;
}

// functions statements.html
