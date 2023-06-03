const Name = document.querySelector(".name");

const Continent = document.querySelector(".continent");

const population = document.querySelector(".population");

const mapsLink = document.querySelector(".maps-link");

const capital = document.querySelector(".capital");

//function to getdata from api
function getdata(country){
    fetch("https://restcountries.com/v3.1/name/"+country)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
    })
    .then(data => {  
        Name.innerHTML = "Name : "+data[0].name.common;
        document.querySelector(".icon").src = data[0].flags.png;
        Continent.innerHTML = "Continent name : "+data[0].continents[0];
        population.innerHTML = "Population : "+Math.round((data[0].population)/1000000)+" Million (approximately)";
        mapsLink.href = data[0].maps.googleMaps;
        capital.innerHTML = "Capital : "+data[0].capital;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ data[0].name.common +"')"
        }
    )
    .catch(error => {
        if (error.message === '404') {
          alert('Country not found. Check for typo errors.');
        } else {
          console.log('An error occurred:', error.message);
        }
      });
}
getdata("Bharat");//default country

//adding eventlistener to search button
document.querySelector(".search-btn").addEventListener("click",(e)=>{
    getdata(document.querySelector(".search-bar").value);
})
//adding eventlistener to enter key 
document.querySelector(".search-bar").addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
         getdata(document.querySelector(".search-bar").value);
    }
}
)
