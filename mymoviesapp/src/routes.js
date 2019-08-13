import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Movie from './pages/movie'

export default createStackNavigator({
    Main,
    Movie,
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#E8B708",
        },
        headerTintColor: "#000"
    }   
});