/**
 * @format
 */

import Home from './src/views/Home';
import Pokedex from './src/views/Pokedex'
import Pokemon from './src/views/Pokemon';

import { Navigation } from "react-native-navigation";

if (__DEV__) {
  require('react-devtools');
}

Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Pokedex`, () => Pokedex);
Navigation.registerComponent(`Pokemon`, () => Pokemon);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "Home"
          }
        }]
      }
    }
  });
});
