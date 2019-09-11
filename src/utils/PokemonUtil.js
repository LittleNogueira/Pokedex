const PokemonUtil = {
    upperCaseFirstLetter: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
    }
}

export default PokemonUtil;