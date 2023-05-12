import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const LoadingScreen = () => {

    checkIfLoggedIn = () => {
        firebase.onAuthStateChanged(function(user)
        {
            if(user)
            {
                this.props.navigation('HomeScreen');
            }
            else
            {
                this.props.navigation.navigate('LoginScreen');
            }
        }.bind(this))
    }

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large"/>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})