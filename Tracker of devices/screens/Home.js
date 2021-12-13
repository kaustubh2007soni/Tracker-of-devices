import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,ImageBackground
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
    <ImageBackground
          source={require('../assets/life-heart.gif')}
          style={styles.backgroundImage}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Text style={styles.titleText}> Are You a Child or Adult </Text>
          </View>
          <TouchableOpacity style={styles.routecard} onPress={()=>
          this.props.navigation.navigate("AdultLoginScreen")}>
            <Text style={styles.routetext}>ADULT</Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.routecard} onPress={()=>
          this.props.navigation.navigate("ChildLoginScreen")}>
            <Text style={styles.routetext}>CHILD</Text>
         </TouchableOpacity>
         </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex:1, 
    resizeMode:'cover'
  },
  titleText: {
    fontSize: 27,
    fontWeight:"bold",
    color: 'red',
    marginLeft:-15
  },
  droidSafeArea: {
    margintop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#"
  },
  routecard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#',
  },
  routetext: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#ff0051',
    marginTop: 20,
    paddingLeft: 65,
  },
});
