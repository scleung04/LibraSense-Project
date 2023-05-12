import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';


function HomeStackScreen({ navigation }) {
  const handleImagePress = () => {
    const url = 'https://www.senecahackathon.com/';
    Linking.openURL(url);
  };

return(
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', margin: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Good morning, Hang</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10}}>
            <Image className=" w-72 h-96" source={require('../assets/Hackathon-poster.png')}   onPress={() => handleImagePress()}/>
        </View>
        
    </View>
)
}

const HomeTab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <HomeTab.Navigator screenOptions={{ headerShown: false }}>
      <HomeTab.Screen name="HomeStack" component={HomeStackScreen} />
    </HomeTab.Navigator>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})