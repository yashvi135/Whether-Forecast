let lon;
let lat;
let temperature=document.querySelector(".temp");
let summary=document.querySelector(".summary");
let loca=document.querySelector(".location");
let icons=document.querySelector(".icon");
const kelvin=273;

window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            lon=position.coords.longitude;
            lat=position.coords.latitude;
            //Api Id
            const api="b6d055e39ee237af35ca066f35474e9df";
            //api url
            const base=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
             `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

            //calling the api and fetch the api
            fetch(base)
            .then((response)=>{
                return response.json();
            })

            .then((data)=>{
                console.log(data);
                temperature.textContent=Math.floor(data.main.temp-kelvin)+"C";
                // Summary.textContent=data.weather[0].description;
                summary.textContent = data.weather[0].description;
                loca.textContent=data.name+","+data.sys.country;
               
                let icon1 = data.weather[0].icons;
          icons.innerHTML = 
              `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
            });
        });
    }

});

