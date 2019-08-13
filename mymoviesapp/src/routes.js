import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main,
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#E8B708",
        },
        headerTintColor: "#000"
    }   
});