var data=null;
async function fetchData(city)
{
    
    try{
        
     const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=292f704cab4cadba6d316dcbb83bd60d`)
     data= await res.json();
  
     if(data.cod===200)
     {
        var error=document.getElementsByClassName('error')[0]
        error.style.display='none'
        var display=document.getElementsByClassName('display')[0]
        display.style.display='flex'
        var image=document.getElementsByClassName('image')[0]
        var temperature=document.getElementsByClassName('temp-val')[0]
        var city=document.getElementsByClassName('city')[0]
        var humidity=document.getElementsByClassName('humidity-val')[0]
        var wind=document.getElementsByClassName('wind-val')[0]
        
        var type=data.weather[0].main
        switch(type)
        {
           case 'Mist':image.src='/images/mist.png';
           case 'Clear':image.src='/images/clear.png';
           case 'Clouds':image.src='/images/clouds.png';
           case 'Rain':image.src='/images/rain.png';
           case 'Humidity':image.src='/images/humidity.png';
           case 'Drizzle':image.src='/images/drizzle.png';
        }
        
        var temp=Math.floor((parseFloat(data.main.temp)-273)*100)/100;
        temperature.innerText=temp
        city.innerText=data.name
        humidity.innerText=data.main.humidity
        wind.innerText=data.wind.speed
     }
     else{
        var display=document.getElementsByClassName('display')[0]
       display.style.display='none'
        var error=document.getElementsByClassName('error')[0]
        error.style.display='block'
     }
    }
    catch(error)
    {
        var display=document.getElementsByClassName('display')[0]
        display.style.display='none'
        var error=document.getElementsByClassName('error')[0]
        error.style.display='block'
        error.innerText="Something went wrong"
    }
    
}
var city='Delhi'
fetchData(city)

function searchWeather(e)
{
    city=e.target.value
  
}


