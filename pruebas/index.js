
import fetch from "node-fetch";
import { json } from "stream/consumers";

let API = 'https://pokeapi.co/api/v2/pokemon/'


/* fetch(API)
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)))
    .catch(err => console.log(err)); */
const fetchData = async (API) =>{
    try{
        const res = await fetch(API);
        const data = await res.json();
        return data;
    }
};
fetchData()