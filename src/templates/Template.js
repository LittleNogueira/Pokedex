import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const Template = (props) => {
    return (
        <View style={styles.container} >
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor:"white",
        height:"100%",
        width:"100%"
    }
});

export default Template;