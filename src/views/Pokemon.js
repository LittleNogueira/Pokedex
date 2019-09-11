import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Template from '../templates/Template';
import PokemonUtil from '../utils/PokemonUtil';

class Pokemon extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const {pokemon} = this.props;

        return(
            <View style={styles.container}>
                <View style={{...styles.header,backgroundColor:PokemonUtil.getColor(pokemon.types)}} >
                    <View style={styles.info} >
                        <Text style={styles.name} >{PokemonUtil.upperCaseFirstLetter(pokemon.name)}</Text>
                        <View>
                            <Text>Grass</Text>
                            <Text>Poison</Text>
                        </View>
                        <Image style={styles.image} source={PokemonUtil.getImagePokemon(pokemon)} />
                    </View>
                </View>
                <View style={styles.body} >
                    <Text>hjkghjk</Text>
                </View>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    header:{
        height:"45%",
    },
    body:{

    },
    container:{
        height:"100%"
    },
    name: {
        fontSize: 30,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold",
        color:'white'
    },
    info:{
        marginLeft:15
    },
    image:{
        height: 200,
        width:200
    }
});

export default Pokemon;