console.log("Start JS");

//Utilizando async await. Lembrando que só funciona com funções
/* const baseURL = "https://restcountries.com/v3.1/"
const request = "all";

async function getAllCountries() {
    try{
        const response = await fetch(`${baseURL}/${request}`, {
            method: "GET",
        })
    
        const data = await response.json();
        return console.log(data)
    } catch (error) {
        console.log(error)
    }
} */

getAllCountries()

//Método tradicional
/* const baseURL = "https://restcountries.com/v3.1/";
fetch(`${baseURL}all`, {method: "GET"})
    .then(response => response.json())
        .then(data => console.log(data))
    .catch((error) => console.log(error)); */