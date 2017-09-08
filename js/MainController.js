var celsiusInput;
var fahrenheitInput;
var inputC = document.getElementById('tempInputCelsius');
var inputF = document.getElementById('tempInputFahrenheit');
var celsiusInd = document.getElementById('celsiusRed');
var fahrenheitInd = document.getElementById('fahrenheitRed');
var disabledC = 0;
var disabledF = 0;
var button = document.getElementById('Button');
button.addEventListener('click', calculate);

function calculate(){

    celsiusInput = inputC.value;
    fahrenheitInput = inputF.value;
    if(disabledF === 1 && celsiusInput <= 100){
        var fahrenheit = celsiusInput * 1.8 +32 ;
        var parsed = parseInt(fahrenheit);
        inputF.placeholder =  parsed;
        fahrenheitInd.style.height = (parsed / 212) *100 + '%';
        fahrenheitInd.style.top = 100 -((parsed / 212) *100) + '%';
        celsiusInd.style.height = celsiusInput + '%';
        celsiusInd.style.top = 100 - celsiusInput + '%';

    }
    else if(disabledC === 1 && celsiusInput <= 100) {
        var celsius = (fahrenheitInput - 32) / 1.8 ;
        var parsed = parseInt(celsius);
        inputF.placeholder =  parsed;
        celsiusInd.style.height = parsed + '%';
        celsiusInd.style.top = 100 - parsed + '%';
        fahrenheitInd.style.height = (fahrenheitInput / 212) *100 + '%';
        fahrenheitInd.style.top = 100 -((fahrenheitInput / 212) *100) + '%';
    }
    else{
        alert('Please Enter Number Lower Than 100')
    }

}
function disableF(){
    inputF.disabled = 'disabled';
    disabledF = 1;

}
function disableC(){
    inputC.disabled = 'disabled';
    disabledC = 1;
}
// Created By Hovhannes Zohrabyan


