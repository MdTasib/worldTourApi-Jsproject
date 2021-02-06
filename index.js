fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => displayData(data))

// (1)
// const displayData = countrys => {
//     const countrysContainer = document.getElementById('countrys');
//     for (let i = 0; i < countrys.length; i++) {
//         const country = countrys[i];
//         // const singleCountryDiv = document.createElement('div');
//         // countrysContainer.appendChild(singleCountryDiv);

//         // const h3 = document.createElement('h3');
//         // h3.innerText = country.name;
//         // singleCountryDiv.appendChild(h3);

//         // const p = document.createElement('p');
//         // p.innerText = country.capital;
//         // singleCountryDiv.appendChild(p);
//     }
// }

// (2)
// const displayData = countrys => {
//     const countrysContainer = document.getElementById('countrys');
//     for (let i = 0; i < countrys.length; i++) {
//         const country = countrys[i];

//         const singleCountryDiv = document.createElement('div');
//         singleCountryDiv.classList = 'country';
//         const singleCountryInfo = `
//         <h3 class="country-name">${country.name}</h3>
//         <p>${country.capital}</p>
//         `
//         singleCountryDiv.innerHTML = singleCountryInfo;
//         countrysContainer.appendChild(singleCountryDiv);


//     }
// }

// (3)
const displayData = countrys => {
    const countrysContainer = document.getElementById('countrys');

    // for loop
    // for (let i = 0; i < countrys.length; i++) {
    //     const country = countrys[i];
    // }

    // forEach loop
    countrys.forEach(country => {
        const singleCountryDiv = document.createElement('div');
        singleCountryDiv.classList = 'country';
        const singleCountryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="details('${country.name}')">Details</button>
        `
        singleCountryDiv.innerHTML = singleCountryInfo;
        countrysContainer.appendChild(singleCountryDiv);
    })
}
const details = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => response.json())
        .then(data => countryDetails(data[0]))
}

const countryDetails = country => {
    const countryInfo = document.getElementById('country-info');
    countryInfo.innerHTML = `
    <h3>Country Name: ${country.name}</h3>
    <p>Region: ${country.region}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}">
    `
}