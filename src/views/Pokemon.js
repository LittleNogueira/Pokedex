import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

import Template from '../templates/Template';
import PokemonUtil from '../utils/PokemonUtil';

import Card from '../components/card/Card';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { pokemon } = this.props;

        return (
            <ScrollView contentContainerStyle={styles.container} >
                <View style={{ ...styles.header, backgroundColor: PokemonUtil.getColor(pokemon.types) }} >
                    <View style={styles.info} >
                        <Text style={styles.name} >{PokemonUtil.upperCaseFirstLetter(pokemon.name)}</Text>
                        <View style={styles.types} >
                            <Text style={styles.type} >Grass</Text>
                            <Text style={styles.type} >Poison</Text>
                        </View>
                        <View style={styles.teste} >
                            <Image style={styles.image} source={PokemonUtil.getImagePokemon(pokemon)} />
                        </View>
                    </View>
                </View>
                <View style={styles.body} >
                    <Text style={styles.title} >About</Text>
                    <Text>
                        Maecenas eleifend arcu sed felis commodo, nec tincidunt turpis molestie. 
                        Integer malesuada nec sapien vitae accumsan. 
                        Maecenas sed imperdiet est, id efficitur erat. 
                        Cras accumsan aliquam metus quis placerat. 
                        Pellentesque rhoncus vulputate pretium. 
                        Curabitur vel ligula luctus, viverra lorem id, commodo nulla. 
                        Nulla sagittis neque ullamcorper, pellentesque eros eu, gravida mi. 
                        In sed mi faucibus, malesuada sapien ut, fermentum neque. 
                        Aliquam eget feugiat enim. Donec velit leo, congue ac elit vitae, sodales pulvinar velit. 
                    </Text>

                    <Card>
                        <Text>Teste</Text>
                    </Card>
                </View>
            </ScrollView>
        );
    };

}

const styles = StyleSheet.create({
    header: {
        height: 250,
    },
    body: {
        marginLeft:15
    },
    title:{
        fontSize: 20,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold",
    },
    container: {
        // height: "100%"
    },
    name: {
        fontSize: 30,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold",
        color: 'white'
    },
    info: {
        marginLeft: 15,
        height: "100%"
    },
    image: {
        height: 200,
        width: 200
    },
    types: {
        flexDirection: "row",
        marginTop: 5
    },
    type: {
        backgroundColor: "rgba(255,255,255,0.2)",
        fontSize: 11,
        color: "white",
        padding: 3,
        borderRadius: 15,
        marginRight: 5,
        textAlign: "center",
        width: 50
    },
    teste: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
});

export default Pokemon;