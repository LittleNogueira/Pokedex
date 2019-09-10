import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


class ItemPokedex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemon:{}
        }
    }

    componentDidMount(){
        fetch(this.props.url).then(res => res.json()).then(res => {
            let pokemon = res;
            pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            this.setState({pokemon});
        });
    }

    getColor = () => {

        const types = this.state.pokemon.types;
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
            
            case 'ground':
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

            default:
                return "#c5c5c5"
        }
    }

    getImagePokemon = () => {

        const pokemon = this.state.pokemon;

        if(pokemon.sprites === undefined){
            return  {uri:null};
        }else{
            return {uri:pokemon.sprites.front_default}
        }   
    }

    render(){

        const {pokemon} = this.state; 

        return(
            <TouchableOpacity>
                <View style={{...styles.container,backgroundColor:this.getColor()}} >
                    <View style={styles.infos} >
                            <Text style={styles.name} >{pokemon.name}</Text>
                            <Text>Poison</Text>
                            <Text>Grass</Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={this.getImagePokemon()}
                    />
                </View>
            </TouchableOpacity>
       );
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height: 100,
        alignItems:"center",
        borderRadius:20,
        marginBottom:10,
        width:170
    },
    infos:{
        flexDirection:"column",
        marginLeft:20
    },
    name:{
        fontSize:13,
        fontWeight:"bold",
        color:"white"
    },
    image:{
        width: 85,
        height: 85
    }
});

export default ItemPokedex;