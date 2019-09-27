import React from 'react';
import { 
    View,
    StyleSheet 
} from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.card} >
            {props.children}
        </View>
    );

}
const styles = StyleSheet.create({
    card:{
       marginTop: 9,
       marginBottom: 9,
       borderRadius: 5,
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
});

export default Card;