
var input1 = document.getElementById('firstnumber');
var input2 = document.getElementById('secondnumber');
var inputType = document.getElementById('firstContent');
var resultType = document.getElementById('secondContent');
var inputTypevalue;
var resultTypevalue;

input1.addEventListener("keyup", myconversion)
inputType.addEventListener("change", myconversion)
resultType.addEventListener("change", myconversion);





function myconversion() {
    inputTypevalue = inputType.value;
    resultTypevalue = resultType.value;

    lengthconversion();
    weightconversion();
    temperatureconversion();
    timeconversion();
    
}

function lengthconversion() {
    if(inputTypevalue === "meter" && resultTypevalue === "kilometer"){
        input2.value = Number(input1.value) * 0.001;
    }else if (inputTypevalue === "meter" && resultTypevalue === "centimeter"){
        input2.value = Number(input1.value) * 100;
    }else if(inputTypevalue === "meter" && resultTypevalue === "meter") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "kilometer" && resultTypevalue === "meter"){
        input2.value = Number(input1.value) * 1000;
    }else if (inputTypevalue === "kilometer" && resultTypevalue === "centimeter"){
        input2.value = Number(input1.value) * 100000;
    }else if(inputTypevalue === "kilometer" && resultTypevalue === "kilometer") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "centimeter" && resultTypevalue === "meter"){
        input2.value = Number(input1.value) * 0.01;
    }else if (inputTypevalue === "centimeter" && resultTypevalue === "kilometer"){
        input2.value = Number(input1.value) * 0.00001;
    }else if(inputTypevalue === "centimeter" && resultTypevalue === "centimeter") {
        input2.value = input1.value;
    }

    
}

function weightconversion() {
    if(inputTypevalue === "gram" && resultTypevalue === "kilogram"){
        input2.value = Number(input1.value) * 0.001;
    }else if (inputTypevalue === "gram" && resultTypevalue === "milligram"){
        input2.value = Number(input1.value) * 1000;
    }else if(inputTypevalue === "gram" && resultTypevalue === "gram") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "kilogram" && resultTypevalue === "gram"){
        input2.value = Number(input1.value) * 1000;
    }else if (inputTypevalue === "kilogram" && resultTypevalue === "milligram"){
        input2.value = Number(input1.value) * (1e+6);
    }else if(inputTypevalue === "kilogram" && resultTypevalue === "kilogram") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "milligram" && resultTypevalue === "gram"){
        input2.value = Number(input1.value) * 0.001;
    }else if (inputTypevalue === "milligram" && resultTypevalue === "kilogram"){
        input2.value = Number(input1.value) * (1e+6);
    }else if(inputTypevalue === "milligram" && resultTypevalue === "milligram") {
        input2.value = input1.value;
    }


   
}

function temperatureconversion() {
    if(inputTypevalue === "celsius" && resultTypevalue === "kelvin"){
        input2.value = Number(input1.value) + 273.15;
    }else if (inputTypevalue === "celsius" && resultTypevalue === "fahrenheit"){
        input2.value = (Number(input1.value) * 9/5) + 32;
    }else if(inputTypevalue === "celsius" && resultTypevalue === "celsius") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "fahrenheit" && resultTypevalue === "celsius"){
        input2.value = (Number(input1.value) - 32) * 5/9;
    }else if (inputTypevalue === "fahrenheit" && resultTypevalue === "kelvin"){
        input2.value = (Number(input1.value) -32) * 5/9 + 273.15;
    }else if(inputTypevalue === "fahrenheit" && resultTypevalue === "fahrenheit") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "kelvin" && resultTypevalue === "fahrenheit"){
        input2.value = (Number(input1.value) - 273.15) * 9/5 + 32;
    }else if (inputTypevalue === "kelvin" && resultTypevalue === "celsius"){
        input2.value = Number(input1.value) - 273.15;
    }else if(inputTypevalue === "kelvin" && resultTypevalue === "kelvin") {
        input2.value = input1.value;
   }



}


function timeconversion() {
    if(inputTypevalue === "second" && resultTypevalue === "minute"){
        input2.value = Number(input1.value) * 0.01667 ;
    }else if (inputTypevalue === "second" && resultTypevalue === "hour"){
        input2.value = (Number(input1.value) * 0.00027778);
    }else if(inputTypevalue === "second" && resultTypevalue === "millisecond") {
        input2.value = input1.value * 1000;
    }else if(inputTypevalue === "second" && resultTypevalue === "second") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "minute" && resultTypevalue === "second"){
        input2.value = Number(input1.value) * 60
    }else if (inputTypevalue === "minute" && resultTypevalue === "hour"){
        input2.value = (Number(input1.value) * 0.0166667) ;
    }else if(inputTypevalue === "minute" && resultTypevalue === "millisecond") {
        input2.value = input1.value * 60000;
    }else if(inputTypevalue === "minute" && resultTypevalue === "minute") {
        input2.value = input1.value;
    }

    if(inputTypevalue === "hour" && resultTypevalue === "second"){
        input2.value = (Number(input1.value) * 3600);
    }else if (inputTypevalue === "hour" && resultTypevalue === "minute"){
        input2.value = Number(input1.value) * 60;
    }else if(inputTypevalue === "hour" && resultTypevalue === "millisecond") {
        input2.value = input1.value * (3.6e+6);
   }else if(inputTypevalue === "hour" && resultTypevalue === "hour") {
    input2.value = input1.value;
    }

   if(inputTypevalue === "millisecond" && resultTypevalue === "second"){
    input2.value = Number(input1.value) * 0.001  ;
    }else if (inputTypevalue === "millisecond" && resultTypevalue === "minute"){
    input2.value = Number(input1.value) * (1.6667e-5);
    }else if(inputTypevalue === "millisecond" && resultTypevalue === "hour") {
    input2.value = input1.value * (2.77783333e-7);
    }else if(inputTypevalue === "millisecond" && resultTypevalue === "millisecond") {
    input2.value = input1.value;
    }


}




