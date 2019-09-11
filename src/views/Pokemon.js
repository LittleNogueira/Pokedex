import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Template from '../templates/Template';

class Pokemon extends React.Component{

    constructor(props){
        super(props);
        console.warn(this.props);
    }

    render(){
        return(
            <Template>
                <Text>sdfsdf</Text>
            </Template>
        );
    };

}

export default Pokemon;