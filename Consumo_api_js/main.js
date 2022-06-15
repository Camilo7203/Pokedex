/*
const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector("img");
        img.src = data[0].url;
    });
 */


function getNumber(){
    let x = Math.floor(Math.random()*152) + 1;
    return x
}

async function getPokemon(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+getNumber());
        const data = await response.json();
        const img = document.querySelector("img");
        img.src = (data.sprites.other.home.front_default);
        document.getElementById('1').innerText = ('Type: '+data.types[0].type.name);
        document.getElementById('2').innerText = ('Name: '+data.name);
        document.getElementById('3').innerText = ('Weight: '+data.weight/10+' kg');
        document.getElementById('4').innerText = ('height: '+data.height/10+' m');
    }
    catch(error){
        console.log(error)
    }
};
getPokemon()
/*
fetch(API)
    .then(res => res.json())
    .then(data =>{
        let pokemon = (data.results[numeroPokemon].url)
        fetch(pokemon)
        .then(res => res.json())
        .then(data => {
            const img = document.querySelector("img");
            let imagenPokemon = (data.sprites.other.home.front_default);
            img.src = imagenPokemon;
            document.getElementById('1').innerText = ('Type: '+data.types[0].type.name);
            document.getElementById('2').innerText = ('Name: '+data.name);
            document.getElementById('3').innerText = ('Weight: '+data.weight/10+' kg');
            document.getElementById('4').innerText = ('height: '+data.height/10+' m');
        })
    })
*/