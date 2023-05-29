let inputBoxDay = document.querySelector('#day');
let inputBoxMonth = document.querySelector('#month');
let inputBoxYear = document.querySelector('#year');

let button = document.querySelector('.circle');

let yearResponse = document.querySelector('#Year-value');
let dayRespone = document.querySelector('#day-value');
let monthResponse = document.querySelector('#month-value');
let val = document.querySelector('#Year-value')
let prac = document.querySelector('.years');

const currentDate = new Date()
const yearshe = currentDate.getFullYear(); // 2023
const monthwat = currentDate.getMonth() + 1; 
const daykwa = currentDate.getDate(); // 27

console.log(yearshe);


button.addEventListener('click', function(){
    if((parseInt(inputBoxDay.value) < 1 || parseInt(inputBoxDay.value) > 31) || (parseInt(inputBoxMonth.value) < 1 || parseInt(inputBoxMonth.value) > 12) || (parseInt(inputBoxYear.value) < 1960 || parseInt(inputBoxYear.value) > 2023)){
        window.alert('For Day 1 to 31 AND for Month 1 to 12 AND For Year 1960 tp 2023');
        inputBoxDay.value = '';
        inputBoxMonth.value = '';
        inputBoxYear.value = '';
    }
    else{

          
  dayRespone.innerText = daykwa - parseInt(inputBoxDay.value);
  dayRespone.style.color = 'Green';
  monthResponse.innerText =  monthwat- parseInt(inputBoxMonth.value); 
  monthResponse.style.color = 'Green';
  yearResponse.innerText = yearshe -  parseInt(inputBoxYear.value)
  yearResponse.style.color = 'Green';

 
}


})

