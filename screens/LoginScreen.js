// Login Screen of LibraSense App

import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import { Button } from 'react-native-web';

import { useAuthRequest } from 'expo-auth-session/providers/google';

import { 
  getAuth, 
  getRedirectResult, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithRedirect, 
  signOut 
} from "firebase/auth";

import GoogleSignInButton from '../components/GoogleSignInButton';
import MicrosoftSignInButton from '../components/MicrosoftSignInButton';

WebBrowser.maybeCompleteAuthSession();


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();


      const [request, response, promptAsync] = useAuthRequest(
        {
          expoClientId: "1087277548556-ud1o5ejkl2me6gf5v40dr43hqfh1snko.apps.googleusercontent.com",
          androidClientId: '1087277548556-srpjpcs7ph0qafvg92038uh41ma9ab8l.apps.googleusercontent.com',
          webClientId: "1087277548556-ud1o5ejkl2me6gf5v40dr43hqfh1snko.apps.googleusercontent.com"
        },
      );
          

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          alert(errorMessage);
          // ..
        });
    }
  
  const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.email);
      navigation.navigate("Home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
  }


      useEffect(() => {
      if (response?.type === "success") {
        setToken(response.authentication.accessToken);
        getUserInfo();
      }
    }, [response, token]);

    const getUserInfo = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const user = await response.json();
        setUserInfo(user);
      } catch (error) {
      }
    };

    const showUserData = () => {
      if (userInfo) {
        return (
          <View style={styles.userInfo}>
            <Image source={{ uri: userInfo.photoURL }} style={styles.profilePic} />
            <Text>Welcome {userInfo.displayName}</Text>
            <Text>{userInfo.email}</Text>
          </View>
        );
      }
    };
{console.log(userInfo)};


  return (
    <KeyboardAvoidingView 
        className="flex-1 items-center justify-center bg-gradient-to-r from-blue-500"
        behavoir="padding"
    >
      <View className=" flex-row items-center gap-16 bottom-28">
        <Text className="text-2xl">LibraSense</Text>
        <Image className="" source={require('../assets/app-logo.png')}/>
      </View>

      <View className="w-3/4">
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            className=" bg-white px-4 py-2 rounded-lg mt-1" />
        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            className=" bg-white px-4 py-2 rounded-lg mt-1" 
            />
      </View>

      <View className=" w-3/5 justify-center items-center mt-9 " >
        <TouchableOpacity
            onPress={handleSignIn}
            className="bg-blue-600 rounded-lg w-full p-3 items-center"
        >
            <Text className="text-white ">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleSignUp}
            className="w-full p-3 bg-white mt-1 rounded-lg border-blue-600 border items-center"
        
        >
            <Text>Sign Up</Text>
        </TouchableOpacity>

      {/* Or Alternate Sign-In Options */}
      <View className="flex-row items-center justify-center mt-4">
        <View className=" flex-1 border-0.5 bg-slate-200" />
        <Text className="mx-2">or</Text>
        <View className=" flex-1 border-0.5 bg-slate-200" />
      </View>

      {/* Google Sign-In */}
        <View>
          <GoogleSignInButton promptAsync={promptAsync} navigation={navigation} response={response}/>
          <MicrosoftSignInButton navigation={navigation}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen



