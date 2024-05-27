function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);

    countryarray.forEach(country => {  
        console.log("Country:", country.name.common);
        if (country.capital && country.capital.length > 0) {
            console.log("Capital:", country.capital[0]);
        } else {
            console.log("Capital: Not available");
        }
        console.log("Flag:", country.flags.png);
    });

}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
