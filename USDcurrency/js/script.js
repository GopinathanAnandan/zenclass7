function reqListener() {
    const countryarray = JSON.parse(this.responseText);
    console.log(countryarray);


    for (let country of countryarray) {
        let temp = country.currencies && country.currencies.USD;
        if (temp) {
            console.log("Country:", country.name.common);
            console.log("Currency:", temp.name);
        }
    }

}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
