function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);

    //using reduce method:
    
    const totalPopulation = countryarray.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log("Total population: ",totalPopulation);

}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
