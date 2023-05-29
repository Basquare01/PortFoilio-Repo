let inputBoxDay = document.querySelector('#day');
let inputBoxMonth = document.querySelector('#month');
let inputBoxYear = document.querySelector('#year');

let button = document.querySelector('.circle');

let yearResponse = document.querySelector('#Year-value');
let dayRespone = document.querySelector('#day-value');
let monthResponse = document.querySelector('#month-value');
let val = document.querySelector('#Year-value')
let prac = document.querySelector('.years');

button.addEventListener('click', function(){
    if((parseInt(inputBoxDay.value) < 1 || parseInt(inputBoxDay.value) > 31) || (parseInt(inputBoxMonth.value) < 1 || parseInt(inputBoxMonth.value) > 12) || (parseInt(inputBoxYear.value) < 1960 || parseInt(inputBoxYear.value) > 2023)){
        window.alert('For Day 1 to 31 AND for Month 1 to 12 AND For Year 1960 tp 2023');
        inputBoxDay.value = '';
        inputBoxMonth.value = '';
        inputBoxYear.value = '';
    }
    else{
          
  dayRespone.innerText = 29 - parseInt(inputBoxDay.value);
  dayRespone.style.color = 'Green';
  monthResponse.innerText = 5 - parseInt(inputBoxMonth.value); 
  monthResponse.style.color = 'Green';
  yearResponse.innerText = 2023 -  parseInt(inputBoxYear.value)
  yearResponse.style.color = 'Green';
}

})


















//  button.addEventListener('click' , function(){
//    let inputBoxDay = document.querySelector('#day');
// let inputBoxMonth = document.querySelector('#month');
//    let num1 = parseInt(inputBoxDay.value);
//    let num2 = parseInt(inputBoxMonth.Value);
//    monthResponse.innerText = num1 + num2
// })

// console.log(inputBoxDay.innerText + inputBoxMonth.innerText)

// let inputBoxDay = document.querySelector('#day');
//    let value1 = parseInt(inputBoxMonth.value);
//    let value = parseInt(inputBoxDay.value);
    
//     console.log(value + value1);