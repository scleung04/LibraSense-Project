import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text} from 'react-native';

const GoogleSignInButton = ({promptAsync, navigation, response}) => {
  
  const [authenticationAttempted, setAuthenticationAttempted] = useState(false);

  useEffect(() => {
    if (authenticationAttempted) {
      if (response?.type === "success") {
        navigation.navigate("Home"); // Navigate to Home screen
      } else {
        alert("Authentication failed. Please try again.");
      }
    }
  }, [response, navigation, authenticationAttempted]);

  const handleGoogleSignIn = async () => {
    await promptAsync();
    setAuthenticationAttempted(true);
  };
  return(
        <TouchableOpacity
        onPress={handleGoogleSignIn}
        className="flex-row bg-blue-600 mt-8 pr-2 pl-1 py-1 rounded-lg items-center justify-between w-3/4"
        >
            <Image
            className="w-8 h-8 bg-white rounded-md"
            source={{
                uri: "https://i.ibb.co/j82DCcR/search.png",
                }}
            />

        <Text className=" text-white">Sign in With Google</Text>
    </TouchableOpacity>
  )
};

export default GoogleSignInButton;
