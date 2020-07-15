import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Container from '@container/Container';

export default class Home extends Component {

     render() {
        console.log("Second: ,",this.props);
        return (
            <Container title="Second" showBack>
                <TouchableOpacity>
                       <Text> Second Screen </Text>
                </TouchableOpacity>
            </Container>
         
        );
    }
}
