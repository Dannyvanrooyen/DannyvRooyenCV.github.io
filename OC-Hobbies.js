var button = document.querySelector('.button')
var InputV = document.querySelector('.InputV')
var name = document.querySelector('.name');
var wind = document.querySelector('.wind');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+InputV.value+'&poid=524901&APPID=083001f2b89fcab975eb3e300c29c89c')
    .then(response=> response.json())
    .then(data => console.log(data))
    .catch(err=>alert("Invalid city name"))
})
