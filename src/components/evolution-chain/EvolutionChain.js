import React,{Fragment} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Evolution from './Evolution';

class EvolutionChain extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            evolution_chain:[]
        }
    }

    componentDidMount(){
        this.loadEvolutionChain();
    }

    loadEvolutionChain = () =>{
        fetch(this.props.urlEvolutionChain)
        .then(res => res.json())
        .then(res => {
            let chain = res.chain;
            let evolution_chain = [];
            while(chain.evolves_to.length != 0 ){
                const evolution = {
                    pokemon:chain.species.url.replace('pokemon-species','pokemon'),
                    evolve_to:chain.evolves_to[0].species.url.replace('pokemon-species','pokemon')
                }

                evolution_chain = [...evolution_chain,evolution];
                chain = chain.evolves_to[0];
            }
            this.setState({evolution_chain});
        });
    }

    getEvolutionChain = () => {

        let listEvolution = []

        if(this.state.evolution_chain.length > 0){

            listEvolution = this.state.evolution_chain.map(evolution => {
                return (
                    <View style={styles.evolutionChain} >
                        <Evolution url={evolution.pokemon}/>
                        <View>
                            <Text>-></Text>
                        </View>
                        <Evolution url={evolution.evolve_to}/>
                    </View>
                );
            })
        }

        return listEvolution;
        
    }

    render(){
        return (
            <Fragment>
                {this.getEvolutionChain()}
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    evolutionChain:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop: 7,
        marginBottom: 7
    },
    evolution:{
        alignItems:"center"
    }
});

export default EvolutionChain;