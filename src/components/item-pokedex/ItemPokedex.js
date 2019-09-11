import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import PokemonUtil from '../../utils/PokemonUtil';

class ItemPokedex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemon:{},
        }
    }

    componentDidMount(){
        fetch(this.props.url).then(res => res.json()).then(pokemon => {
            this.setState({pokemon});
        });
    }

    getListTypes = () => {
        if(this.state.pokemon.types !== undefined){
            return this.state.pokemon.types.map(typeAux => {
                return (<Text key={`${this.state.pokemon.name}-${typeAux.type.name}`} style={styles.type} >{PokemonUtil.upperCaseFirstLetter(typeAux.type.name)}</Text>);
            });
        }
    }

    render(){

        const {pokemon} = this.state; 
        const {onPress} = this.props;

        return(
            <TouchableOpacity onPress={() => onPress(pokemon)} >
                <View style={{...styles.teste,backgroundColor:PokemonUtil.getColor(pokemon.types)}} >
                    <Text style={styles.name} >{PokemonUtil.upperCaseFirstLetter(pokemon.name)}</Text>
                    <View style={styles.container} >
                        <View style={styles.infos} >
                            {this.getListTypes()}
                        </View>
                        <Image
                            style={styles.image}
                            source={PokemonUtil.getImagePokemon(pokemon)}
                        />
                    </View>
                </View>
            </TouchableOpacity>
       );
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:-16
    },
    infos:{
        flexDirection:"column"
    },
    name:{
        fontSize:14,
        fontWeight:"bold",
        color:"white",
        marginLeft: 18,
        marginTop:10
    },
    image:{
        width: 85,
        height: 85,
    },
    teste:{
        height: 110,
        borderRadius:20,
        marginBottom:10,
        width:"100%"
    },
    type:{
        backgroundColor:"rgba(255,255,255,0.2)",
        fontSize:11,
        color:"white",
        padding:3,
        borderRadius:15,
        marginTop:5,
        textAlign:"center",
        width: 50
    }
});

export default ItemPokedex;