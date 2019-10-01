import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

import PokemonUtil from '../../utils/PokemonUtil';

class Evolution extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemon:{}
        }
    }


    componentDidMount(){
        this.loadPokemon();   
    }

    loadPokemon = () => {
        fetch(this.props.url).then(res => res.json()).then(pokemon => {
            this.setState({pokemon});
        });
    }


    render(){

        const {pokemon} = this.state;

        return(
            <View style={styles.evolution} >
                <Image style={styles.image} source={PokemonUtil.getImagePokemon(pokemon)} />
                <Text>{PokemonUtil.upperCaseFirstLetter(pokemon.name)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    evolution:{
        alignItems:"center",
        flexDirection:"column"
    },
    image:{
        width: 100,
        height: 100
    }
});

export default Evolution;