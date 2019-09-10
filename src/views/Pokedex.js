import React from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    View
} from 'react-native';

import Template from '../templates/Template';
import ItemPokedex from '../components/item-pokedex/ItemPokedex';

class Pokedex extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons:[]
        }
    }

    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon?offset=100&limit=20")
            .then(res => res.json())
            .then(res => {
                this.setState({pokemons:res.results})
            })
    }

    getPokemons = () => {
        return this.state.pokemons.map(pokemon => {
            return <ItemPokedex url={pokemon.url} />
        });
    }

    render(){

        const {pokemons} = this.state;

        return(
            <Template>
                <Text style={styles.title} >Pokedex</Text>
                <FlatList
                    data={pokemons}
                    renderItem={({ item, index}) => <View style={{marginLeft:(index%2)*10}} ><ItemPokedex url={item.url}/></View>}
                    keyExtractor={item => item.name}
                    numColumns={2}
                />
                {/* <View style={styles.containerPokedex} >
                    <View style={styles.groupPokedex} >
                        
                        <ItemPokedex color="#4FC1A6"/>
                    </View>
                    <View style={styles.groupPokedex} >
                        <ItemPokedex color="#4FC1A6"/>
                        <ItemPokedex color="#4FC1A6"/>
                    </View>
                </View> */}

            </Template>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold"
    },
    containerPokedex:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    groupPokedex:{
        flexDirection:"column",
        width:"48%"
    },
    teste:{
        marginLeft:10
    }
});

export default Pokedex;