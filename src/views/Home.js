import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Template from '../templates/Template';
import Category from '../components/category/Category';
import { Navigation } from "react-native-navigation";


const Home = (props) => {

    goPokedex = () => {
        Navigation.push(props.componentId,{
            component: {
                name: 'Pokedex',
            },
        });
    }

    return (
        <Template>
            <Text style={styles.title}>What Pokemon{'\n'}are you looking for?</Text>
            <View style={styles.containerCategory} >
                <View style={styles.groupCategory} >
                    <Category onPress={goPokedex.bind(this)} color="#4FC1A6" title="Pokedex" />
                    <Category color="#77C4FE" title="Abilities" />
                    <Category color="#7C538C" title="Locations" />
                </View>
                <View style={styles.groupCategory} >
                    <Category color="#F7786B" title="Moves" />
                    <Category color="#FFCE4B" title="Items" />
                    <Category color="#B1736C" title="Type Charts" />
                </View>
            </View>
        </Template>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold"
    },
    groupCategory: {
        width: "48%"
    },
    containerCategory: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default Home;