import React from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    View
} from 'react-native';

import Template from '../templates/Template';
import ItemPokedex from '../components/item-pokedex/ItemPokedex';
import { Navigation } from "react-native-navigation";


class Pokedex extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons:[]
        }
    }

    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
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

    goPokemon = (pokemon) => {
        Navigation.push(this.props.componentId,{
            component: {
                name: 'Pokemon',
                passProps: {pokemon}
            },
        });
    }

    render(){

        const {pokemons} = this.state;

        return(
            <Template>
                <Text style={styles.title} >Pokedex</Text>
                <FlatList
                    data={pokemons}
                    renderItem={({ item, index}) => <View style={{marginLeft:(index%2)*10,flex:1}} ><ItemPokedex onPress={this.goPokemon.bind(this)} url={item.url}/></View>}
                    keyExtractor={item => item.name}
                    numColumns={2}
                />
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
    }
});

export default Pokedex;