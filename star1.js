const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const ayoub = document.getElementById('current-weather-items');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >=13 ? hour %12:hour;   
    const minutes = time.getMinutes();
    const ampm=hour >=12 ? 'PM':'AM';
    timeEl.innerHTML= (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':'+(minutes < 10? '0'+minutes:minutes)+ ' '+`<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML= days[day] + ', '+ date+" "+ months[month]
}, 1000);
let lodsta = " el jadida"
weatherClick(lodsta)

let starbu=document.getElementById("click")
starbu.addEventListener("click",()=>{
    lodsta=document.getElementById("inp").value
    weatherClick(lodsta)
})


function weatherClick(lodsta){
    document.getElementById("ville").textContent=lodsta
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + lodsta + '&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
          if (requete.status === 200) {
            let staf = requete.response;
            let lodsta = staf.name;
            let temperature = staf.main.temp;
            document.querySelector('#ville').textContent = lodsta;
            document.querySelector("#templa").textContent = temperature;
          } else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
          }
        }
      }
}




