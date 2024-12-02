const api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune/2024-11-27?key=UYHMPVGP4MTZKXZUHM65LDGFF";

const city = document.getElementById("city-span");
const date = document.getElementById("date-span");
const tempreture = document.getElementById("tempreture-span");
const cityInput = document.getElementById("city-input"); 
const timeZOne = document.getElementById("time-zone");
const latitude = document.getElementById("latitude");
const gratitude = document.getElementById("gratitude");

async function  getWeatherData(){
    if(!cityInput){
        alert("Enter the city");
        return;
    }
     
    const dateObj = new Date();
    
    const year = dateObj.getFullYear();
    const day = dateObj.getDay();
    const month = dateObj.getMonth()    ;
  try{
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput.value}/${year}-${month}-${day}?key=UYHMPVGP4MTZKXZUHM65LDGFF`);
    const response = await request.json();
    // console.log(response);
    city.innerText = response.resolvedAddress;
    date.innerText = response.days[0].datetime;
    tempreture.innerText = `${response.days[0].temp} deg F`;
    timeZOne.innerHTML = response.timezone;
    latitude.innerText = response.latitude;
    gratitude.innerText = response.longitude;

  } catch(err){
    console.log(err);
    
  }
 
}
