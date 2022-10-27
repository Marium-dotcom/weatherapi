

let city = document.getElementById('h2')  // country
let degreeC = document.getElementById('h3') //degree in c
let gov = document.getElementById('gov') // government
let feelslike = document.getElementById('feelslike') 
let time = document.getElementById('time')
let searchbtn = document.getElementById('btn')
let searchinput = document.getElementById('search')
let country = "egypt"
// forecast
let degreeCForcasting = document.getElementById('h3forecast') //degree in c
let feelslikeforecast = document.getElementById('feelslikeforecast') 


// forcasting 1
// let degreeCForcasting = document.getElementById('h3-forcasting')
// let feelslikeForcasting = document.getElementById('feelslike-forcasting')
// forcasting 2
// let degreeCForcasting2 = document.getElementById('h3-forcasting2')
// let feelslikeForcasting2 = document.getElementById('feelslike-forcasting2')

// ip

// end

async function getWeather(country = 'egypt'){
  let response =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ca5d2a87d94e4753b9465237221406&q=${country}&aqi=no&days=5`)
   arr = await response.json();

  console.log(country, arr);
  console.log("below is the forcast weather");
  console.log(arr.forecast);
 displaywezar()
 displaywezarforcast()


}




getWeather()





searchinput.addEventListener('keyup', function(e){
  console.log(e.key)
  if(e.key == "Enter"){


  
    getWeather(search.value)
    
  }
})



searchbtn.addEventListener('click' , function(){
  getWeather(search.value)
})







async function displaywezar(){
// Current weather

    city.innerHTML = `  ${arr.location.name}  , ${arr.location.country}`
    h3.innerHTML = `${arr.current.feelslike_c.toFixed(0)}° C`
    feelslike.innerHTML = ` ${arr.current.condition.text} <br> <img src="${arr.current.condition.icon}">`
    time.innerHTML = ` ${arr.current.last_updated}`    

    
}


// forcasting
async function displaywezarforcast(){ 
  // 
  h3forecast.innerHTML = `Min  ${arr.forecast.forecastday[1].day.mintemp_c.toFixed(0)}° C  <br> Max  ${arr.forecast.forecastday[1].day.maxtemp_c.toFixed(0)}° C `
  feelslikeforecast.innerHTML = `${arr.forecast.forecastday[1].day.condition.text}  <br> <img src="${arr.forecast.forecastday[1].day.condition.icon}">`

      console.log(arr.forecast.forecastday[1].day.condition.text)
      
  }

// current local time

function displayTime(){
  let time = new Date()
  let h = time.getHours()
  let min = time.getMinutes()
  let sec = time.getSeconds()


  document.getElementById('h').innerHTML = h
  document.getElementById('min').innerHTML = min
  document.getElementById('sec').innerHTML = sec

  if (document.getElementById('h').innerHTML > 12 )
  {
    document.getElementById('h').innerHTML = document.getElementById('h').innerHTML - 12
  }


  
}

setInterval(displayTime,10)

