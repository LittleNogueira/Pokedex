import React from 'react';
import {View,StyleSheet} from 'react-native';

const Template = (props) => {
    return (
        <View style={styles.container} >
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 22,
        marginRight: 22
    }
});

export default Template;