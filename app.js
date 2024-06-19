function sum(){
    let num1 = new Number (document.getElementById("number01").value);
    let num2 = new Number (document.getElementById("number02").value);
    
    let output = document.getElementById("lbloutput");
    
    document.getElementById("lbloutput").innerHTML=num1+num2;
}

function mi(){
    let num1 = new Number (document.getElementById("number01").value);
    let num2 = new Number (document.getElementById("number02").value);
    
    let output = document.getElementById("lbloutput");
    
    document.getElementById("lbloutput").innerHTML=num1-num2;
}

function di(){
    let num1 = new Number (document.getElementById("number01").value);
    let num2 = new Number (document.getElementById("number02").value);
    
    let output = document.getElementById("lbloutput");
    
    document.getElementById("lbloutput").innerHTML=num1/num2;
}

function mu(){
    let num1 = new Number (document.getElementById("number01").value);
    let num2 = new Number (document.getElementById("number02").value);
    
    let output = document.getElementById("lbloutput");
    
    document.getElementById("lbloutput").innerHTML=num1*num2;
}