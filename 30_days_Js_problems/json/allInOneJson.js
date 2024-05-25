const companies = `[
    {
        "name": "Beyond Horizon",
        "Location": "Nairobi, Kenya",
        "numberOfEmployees": 15,
        "reviews": 5,
        "CEO": "Lucky Baraka"
    },
    {
        "name": "Digibiashara",
        "Location": "Nairobi, Kenya",
        "numberOfEmployees": 25,
        "reviews": 4,
        "CEO": "Ilyas Bourzat"
    },
    {
        "name": "BlueTech Region",
        "Location": "Kisumu, Kenya",
        "numberOfEmployees": 250,
        "reviews": 4.5,
        "CEO": "Lucky Baraka"
    }
]`;

const companiesArray = JSON.parse(companies);

const luckyAsTheCEO = companiesArray
    .filter(company => company.CEO === 'Lucky Baraka')
    .sort((a, b) => b.reviews - a.reviews)
    .map(company => company.name);

console.log(luckyAsTheCEO);

const newCompany = {
    "name": "TurningPoint",
    "Location": "Atlanta, USA",
    "numberOfEmployees": 1050,
    "reviews": 4.3,
    "CEO": "Rhodah Phostine"
};
const fakeCompany = {
    "name": "IamScammer",
    "Location": "Darkness",
    "numberOfEmployees": 5,
    "reviews": 0,
    "CEO": null
}

companiesArray.push(newCompany, fakeCompany);
console.log(companiesArray[3].CEO);

// Updating info
const compToUpdate = companiesArray.find(company => company.name === 'TurningPoint');
if (compToUpdate) {
    compToUpdate.name = "ROLUCH Apartments";
    compToUpdate.reviews = 5
    compToUpdate.Location = "Kitale, Kenya"
}


const deleteCompany = companiesArray.findIndex(company => company.name == 'IamScammer');
if (deleteCompany !== -1) {
    companiesArray.splice(deleteCompany)
}
console.log(companiesArray);
