const countries = [
    {
        country: "India",
        code: "IN",
        cities: ["Delhi", "Mumbai", "Chennai"],
    },
    {
        country: "China",
        code: "CN",
        cities: ["Foshan", "Hunan", "Beijing"],
    },
    {
        country: "Australia",
        code: "AU",
        cities: ["Sydney", "Canberra", "Perth"],
    },
    {
        country: "Sri Lanka",
        code: "SL",
        cities: ["Colombo", "Candy", "Jaffna"],
    },
];

let ctr = document.querySelector("#countries");
let cty = document.querySelector("#cities");

for (let i = 0; i < countries.length; i++) {
    let opt = document.createElement("option");
    opt.value = countries[i].code;
    opt.innerHTML = countries[i].country;
    ctr.append(opt);
}

function populateCities() {
    let selectedCountry = countries.find((country) => country.code === ctr.value);
    cty.innerHTML = '<option value="" selected disabled>Cities</option>';
    if (selectedCountry) {
        for (let i = 0; i < selectedCountry.cities.length; i++) {
            let opt = document.createElement("option");
            opt.innerHTML = selectedCountry.cities[i];
            cty.append(opt);
        }
    }
}
