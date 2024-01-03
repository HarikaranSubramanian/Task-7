const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);

    // a. Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter((country) =>
      country.region.includes("Asia")
    );
    console.log("Countries in Asia:", asiaCountries);

    // b. Get all the countries with a population of less than 2 lakhs using Filter function
    const lessThan2LakhPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with population less than 2 lakhs:",
      lessThan2LakhPopulation
    );

    // c. Print the details (name, capital, flag) using forEach function
    data.forEach((country) => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Capital: ${country.capital}`);
        console.log(`Flag: ${country.flags.png}`);
        console.log(`..........................`)
    });

    // d. Print the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,
      0
    );
    console.log("Total population of countries:", totalPopulation);

    // e. Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(
      (country) => country.currencies && country.currencies.USD
    );
    console.log("Countries using US dollars:", usDollarCountries);
  }
};

// Send the request
xhr.send();
