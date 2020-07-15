import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../utils/Actions'
import { SECOND_KEY } from '@abcd/Routes';
import Container from '@container/Container';

class Home extends Component {
    componentDidMount() {
        this.props.addTodo()
    }
    render() {
    const {name}= this.props.data
        return (
            <Container title="Header" showBack>
                <TouchableOpacity>
                    <Text onPress={()=>this.props.navigation.navigate(SECOND_KEY)}> {name} </Text>
                </TouchableOpacity>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: () =>
            dispatch(addTodo())
    };
};

const mapStateToProps = (state) => {
    const { data } = state
    return { data }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);