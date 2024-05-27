function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);
    
   const asianCountry = countryarray.filter(country=> country.continents[0]==="Asia");
    if(asianCountry){
        console.log("List of the Asian countries:")
        asianCountry.forEach(country => {
            console.log("Country:", country.name.common);
            console.log("continent:", country.continents[0]);
        });
    }   
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
