const vardas = 'John';
console.log(vardas.length < 5 ? "Short Name" : "Long Name")

const clientAge = 16;
const legalAge = 18;
clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

const clientAge = 16;
const legalAge = 18;
clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

const phone = 'iPhone';
const isIphoneUser = phone === 'iPhone';