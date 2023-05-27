
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const input = document.querySelector ('.search-box input');
const information = document.querySelector('.information')
const display1 = document.querySelector('.icons');
const display2 = document.querySelector('.temperature-wind');
const image = document.querySelector('.imagem');
const temperatureText = document.querySelector('.temperatureText');
const windText = document.querySelector('.windText');
const description = document.querySelector('.description');
const body = document.querySelector('body');

//Array de wallpapers de fundo

const backgroundImages = [
    'https://r4.wallpaperflare.com/wallpaper/637/357/144/anime-studio-ghibli-howl-s-moving-castle-wallpaper-488aceca49ebf229da4359279d161cef.jpg',
    'https://r4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-3be62c2d93012fc995842bf94d4cdc00.jpg',
    'https://r4.wallpaperflare.com/wallpaper/803/347/759/anime-natural-light-landscape-forest-studio-ghibli-hd-wallpaper-48365d3810f05c08a02cc19e888214ba.jpg',
    'https://r4.wallpaperflare.com/wallpaper/158/774/427/anime-studio-ghibli-spirited-away-wallpaper-162f03a594ef91dbe5dab6d1f985995d.jpg',
]

    const attBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    document.body.style.backgroundImage = `url(${attBackground})`;



const linksIcons = [
    rain = 'https://i.pinimg.com/564x/84/b2/b3/84b2b3e2e7f855abdeec95b285b553ca.jpg',
    rainWithSun = 'https://i.pinimg.com/564x/b6/12/41/b61241b089a9a5ad6c721e4651f84402.jpg',
    haze = 'https://i.pinimg.com/564x/fe/8e/d9/fe8ed9a053a4d1a45e7d3a889a40e415.jpg',
    sunWithHaze = 'https://i.pinimg.com/564x/49/8f/f8/498ff8630d974835b6b693aeaaa383d1.jpg',
    snow = 'https://i.pinimg.com/564x/58/fe/d6/58fed611e8129a3f267b78a31c2aa53a.jpg',
    sun = 'https://i.pinimg.com/564x/5d/92/37/5d9237e420b69e478fa390cf545d1c22.jpg',
]


//Código com api

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13){
        const city = input.value;
        fetchWeatherData(city)
    }
  })
  apiKey = 'a3af4e77136c83de9e0d61dda95f8c3b'

  function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(Response => Response.json())
        .then(json => {
//Caso tenha erro
   if(json.cod == '404') {
    container.style.height = '400px';
    display1.style.scale = '0';
    
    image.setAttribute('src', 'https://i.pinimg.com/564x/ff/6b/a3/ff6ba34d42047fbdc13b0d48750e6db8.jpg');
    temperatureText.innerHTML = 'Localização não encontrada';
    

   }

   temperatureText.innerHTML = parseInt(json.main.temp) + '°C';
   windText.innerHTML = parseInt(json.main.humidity) + '%';
   description.innerHTML = (json.weather[0].description);

  switch(json.weather[0].main){
    case 'Haze':
        image.src = 'https://i.pinimg.com/564x/fe/8e/d9/fe8ed9a053a4d1a45e7d3a889a40e415.jpg';
        break;
    case 'Clear':
        image.src = 'https://i.pinimg.com/564x/5d/92/37/5d9237e420b69e478fa390cf545d1c22.jpg';
        break;
    case 'Rain':
        image.src = 'https://i.pinimg.com/564x/84/b2/b3/84b2b3e2e7f855abdeec95b285b553ca.jpg';
        break;
    case 'Drizzle':
        image.src = 'https://i.pinimg.com/564x/b6/12/41/b61241b089a9a5ad6c721e4651f84402.jpg';
        break;
    case 'Clouds':
        image.src = 'https://i.pinimg.com/564x/49/8f/f8/498ff8630d974835b6b693aeaaa383d1.jpg';
        break;
    case 'Snow':
        image.src = 'https://i.pinimg.com/564x/58/fe/d6/58fed611e8129a3f267b78a31c2aa53a.jpg';
        break;
    case 'Default':
    image.src = '';
    break; 
  }


});
  }

search.addEventListener('click',  function(){
    city = input.value
    fetchWeatherData(city)

container.style.height = '500px';
information.classList.add('fadeIn');
    
})