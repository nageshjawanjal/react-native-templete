import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import {styles} from '@login/LoginStyle';
import Container from '@container/Container';
import {handleLogin, getUserList} from '@login/LoginActions';
import {withTheme} from "@utils/ThemeProvider"

class Login  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: ''
    }
  }

  onClickListener = (viewId) => {
    this.props.handleLogin();
    // Alert.alert("Alert", "Button pressed "+viewId);
  }

  getUserList = ()=>{
      this.props.getUserList()
  }

  render() {
    const {buttonColor}= this.props.theme;
    const {setTheme, themeID} = this.props;
    return (
        <Container title="Header" showBack hideHeader>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://register.wyfegypt.com/images/form-wizard-login.jpg'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, {backgroundColor:buttonColor} ]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.getUserList()}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => setTheme(themeID === "LIGHT" ? "DARK" : "LIGHT")}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return {
        handleLogin: () =>
            dispatch(handleLogin()),
        getUserList: () =>
            dispatch(getUserList())
    };
};

const mapStateToProps = (state) => {
    const { data } = state
    return { data }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Login));