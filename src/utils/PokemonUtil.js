// import console = require("console");

const PokemonUtil = {
    upperCaseFirstLetter: (string) => {
        if(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },

    getColor: (types) => {
        let substract = 1;

        if(types === undefined){
            return "#4FC1A6";
        }

        if(types.length > 1 && types[types.length - substract].type.name === 'normal'){
            substract++;
        }

        switch (types[types.length - substract].type.name) {
            case 'fire':
                return "#F7786B"
                break;

            case 'water':
                return "#77C4FE"
                break; 
                
            case 'poison':
                return "#7C538C"
                break;     
        
            case 'grass':
                return "#4FC1A6";
                break;

            case 'electric':
                return "#FFCE4B";
                break;   
            
            case 'rock':
                return "#B1736C";
                break;   
            
            case 'dark':
                return "#565669";
                break;
            
            case 'flying':
                return "#cdcde6";
                break;
            
            case 'dragon':
                return "#f7af5a";
                break;

            case 'bug':
                return "#92df68";
                break; 

            case 'ground':
                return "#be7447";
                break;

            case 'psychic':
                return "#405483";
                break;

            case 'fighting':
                return "#a2a29b";
                break;
            case 'ghost':
                return '#9473b4';
                break;
            case 'ice':
                return '#a4def6';
                break;

            default:
                return "#c5c5c5"
        }
    },

    getImagePokemon: (pokemon) => {
        if(pokemon.sprites === undefined){
            return  {uri:null};
        }else{
            return {uri:pokemon.sprites.front_default}
        }   
    },

    getHeightPokemon: (height) => {
        let heightMeters = height / 10;
        let polegadas = heightMeters * 39.370;

        if(heightMeters >= 1){
            return `${polegadas.toFixed(2)} (${heightMeters.toFixed(2)} m)`;
        }else{
            return `${polegadas.toFixed(2)} (${heightMeters.toFixed(2)} cm)`;
        }
    },

    getWeightPokemon: (weight) => {
        let lbs = weight / 4.536;
        let kg = lbs / 2.205;

        return `${lbs.toFixed(1)} lbs (${kg.toFixed(1)} kg)`;
    },

    getDescriptionPokemon: (flavor_text_entries) => {
        if(flavor_text_entries !== undefined && flavor_text_entries.length > 0){
            let input = flavor_text_entries.find(input => {
                return input.language.name === "en";
            });
            return input.flavor_text;
        }
    },
}

export default PokemonUtil;