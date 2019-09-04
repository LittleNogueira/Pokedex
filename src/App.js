import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <View>
      <Text style={styles.title}>What Pokemon{'\n'}are you looking for?</Text>
    </View>
  );
};

/* What Pokemon are you looking for? */

// position: absolute;
// width: 316px;
// height: 66px;
// left: 26px;
// top: 117px;

// font-family: Circular Std;
// font-size: 30px;
// line-height: 42px;
// /* or 140% */
// display: flex;
// align-items: center;




const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    color: "#303943",
    lineHeight: 42,
    fontFamily: "Circular Std"
  }
});

export default App;
