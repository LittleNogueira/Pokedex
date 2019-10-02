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
            pokemons:[],
            loading: false,
            offset: 360,
            size: 20
        }
    }

    componentDidMount(){
        this.loadMorePokemons();
    }

    loadMorePokemons = () => {
       if(!this.state.loading){
        this.setState({loading:true});

        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=${this.state.size}`)
            .then(res => res.json())
            .then(res => {

                let pokemons = [...this.state.pokemons,...res.results];
                // const initial = pokemons.length - (this.state.size * 2);
                // pokemons = pokemons.slice(initial >= 0 ? initial : 0,pokemons.length);

                this.setState({
                    pokemons,
                    loading:false,
                    offset:this.state.offset + this.state.size
                });
            });
       }
    }

    goPokemon = (pokemon) => {
        Navigation.push(this.props.componentId,{
            component: {
                name: 'Pokemon',
                passProps: {pokemon}
            },
        });
    }

    // loading = () => {

    //     if(!this.state.loading) return null;

    //     if(this.state.loading){
    //         return (
    //             <View style={styles.loading} >
    //              <ActivityIndicator size="large" />
    //            </View>); 
    //     }
    // }

    render(){

        const {pokemons} = this.state;

        return(
            <Template>
                <Text style={styles.title} >Pokedex</Text>
                <FlatList
                    data={pokemons}
                    renderItem={({ item, index}) => {
                        return <View style={{marginLeft:(index%2)*10,flex:1}} ><ItemPokedex onPress={this.goPokemon.bind(this)} url={item.url}/></View>
                    }}
                    keyExtractor={item => item.name}
                    numColumns={2}
                    onEndReached={this.loadMorePokemons}
                    onEndReachedThreshold={0.1}
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
    },
    loading:{
        marginTop: 10,
    }
});

export default Pokedex;