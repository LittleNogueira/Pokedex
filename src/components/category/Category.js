import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Category = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <View style={{...styles.category,backgroundColor:props.color}} >
                <Text style={styles.title} >{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    category: {
        height: 63,
        width: "100%",
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        display:"flex",
        justifyContent:"center"
    },
    title: {
        color: "#FFF",
        fontSize: 14,
        marginLeft: 20,
        fontWeight: "bold",
        zIndex: 10
    },
});

export default Category;