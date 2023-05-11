import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const MicrosoftSignInButton = ({navigation}) => {
  return(
        <TouchableOpacity
        className="flex-row bg-slate-500 mt-8 pr-2 pl rounded-lg items-center justify-between w-50"
        >
            <Image
            className="w-10 h-10 rounded-2xl"
            source={require('../assets/microsoft-logo.png')}
            />

         <Text className=" text-white">Sign in With Microsoft</Text>
    </TouchableOpacity>
  )
};

export default MicrosoftSignInButton;
