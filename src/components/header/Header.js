import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@header/HeaderStyle';
import PropTypes from 'prop-types';

const { container } = styles
export default class Header extends Component {
    render() {
        console.log(this.props);
        const { title, showBack } = this.props;
        return (
            <View style={container}>
               <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text>back</Text>
                </TouchableOpacity>
                <Text>{title}</Text>
            </View>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    showBack: PropTypes.bool
};
Header.defaultProps = {
    title: "",
    showBack: false
}