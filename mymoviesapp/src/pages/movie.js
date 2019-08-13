import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';


export default class Movie extends Component {

    static navigationOptions = {
        title: "Movie"
    };

    state = {
        data: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/movies')
        const { data } = response;
        console.log(data);
        this.setState({ data })
    }




    render() {
        return (
            <View style={styles.container}>
               <Text>
                   Movie
               </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    list: {
        padding: 20,
    },
    movieContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    movieTitle: {
        fontSize:18,
        fontWeight: 'bold',
        color: '#333'
    },
    moviePlot:{
        fontSize: 16,
        marginTop: 5,
        lineHeight: 24,
    },

    movieButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#E8B708',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    movieButtonText:{
        fontSize: 16,
        color: '#E8B708',
        fontWeight: 'bold',
    }
})