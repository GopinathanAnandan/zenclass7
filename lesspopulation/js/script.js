function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);

    const result = countryarray.filter(country => country.population < 200000);

    if (result) {
        console.log("Countries with a population of less than 2 lakhs:");
        result.forEach(country => {
            console.log("Country:", country.name.common);
            console.log("Population:", country.population);
        });
    } else {
        console.log("No countries found with a population of less than 2 lakhs.");
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
