import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import Header from '@header/Header';

export default class Container extends Component {


    render() {
        const { children, title, showBack, hideHeader } = this.props
        return (
            <SafeAreaView style={{flex:1}}>
               {!hideHeader &&  <Header title={title} showBack={showBack}/>}
                {children}
            </SafeAreaView>
        );
    }
}

Container.propTypes = {
    children: PropTypes.any.isRequired,
    title:PropTypes.string,
    showBack: PropTypes.bool,
    hideHeader:PropTypes.bool
};
Container.defaultProps = {
    title:"",
    showBack:false,
    hideHeader:false
}