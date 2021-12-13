import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

import  firebase from 'firebase';
import db from '../config'

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  login = async (emailId, password) => {
    if (emailId && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password);
        if (response) {
          this.props.navigation.navigate('ChildScreen');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
           alert("user dosen't exists");
            console.log("doesn't exist");
            break;
          case 'auth/invalid-email':
           alert('incorrect email or password');
            console.log('invaild');
            break;
        }
      }
    } else {
    alert('enter email and password');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/loading_love.gif')}
          style={styles.backgroundImage}>
          <View>
           
            <Text style={{ textAlign: 'center', fontSize: 30, color: '#ff00e1' }}>
              Tracker of Devices 
              This App Helps you Track Your Childs Devices
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.loginBox}
              placeholder="Parent enter your Email"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />

            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              placeholder="Parent enter your Password"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={async () => {
               this.login(this.state.emailId, this.state.password);
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 50,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    backgroundColor: '#',
    color: '#ffff33',
    marginTop: 30,
    borderRadius: 120,
    placeholderTextColor: '#ff00b3',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  loginText: {
    textAlign: 'center',
    color: 'pink',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  loginButton: {
    height: 40,
    width: 90,
    borderWidth: 1,
    marginTop: 10,
    paddingTop: 5,
    borderRadius: 10,
    marginLeft: 110,
    backgroundColor: '#',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
