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
        flex:1,
        borderRadius: 30,
        shadowOffset:{width: 10, height: 60},
        shadowColor: 'black',
        shadowOpacity: 0.75,
        // box-shadow: 0px 0px 60px -26px rgba(0,0,0,0.75);
    }
});

export default Card;