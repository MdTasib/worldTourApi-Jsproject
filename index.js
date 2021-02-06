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
    for (let i = 0; i < countrys.length; i++) {
        const country = countrys[i];

        const singleCountryDiv = document.createElement('div');
        singleCountryDiv.classList = 'country';
        const singleCountryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        `
        singleCountryDiv.innerHTML = singleCountryInfo;
        countrysContainer.appendChild(singleCountryDiv);


    }
}