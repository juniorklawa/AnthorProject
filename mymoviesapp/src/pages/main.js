import React, {Component} from 'react';
import {View,Text} from 'react-native';
import api from '../services/api';


export default class Main extends Component {

    static navigationOptions = {
        title: "My movies"
    };

    componentDidMount(){
        console.log('teste')
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/movies')
        const {data} = response;
      
        console.log(data);
    }

    render(){
        return(
            <View>
                <Text>
                    Página Main
                </Text>
            </View>
        )
    }
}