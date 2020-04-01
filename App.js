import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from "react-redux";
import ErrorCatcher from "./src/error-catcher";
import UnsplashAPIservice from "./src/services/unsplash-api";
import { UnsplashAPIProvider } from "./src/unsplash-api-context";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/home-screen";
import ImageScreen from "./src/screens/image-screen";

import store from "./src/store.js";

const Stack = createStackNavigator();
const unsplashAPIservice = new UnsplashAPIservice();

export default function App() {
  	return (
  		<Provider store={store}>
	  		<ErrorCatcher>
	  			<UnsplashAPIProvider value={unsplashAPIservice}>
				    <NavigationContainer>
				      <Stack.Navigator>
				        <Stack.Screen name="HomeScreen" component={HomeScreen} />
				        <Stack.Screen name="ImageScreen" component={ImageScreen} />
				      </ Stack.Navigator>
			    	</ NavigationContainer>
			    </ UnsplashAPIProvider>
		    </ ErrorCatcher>
		</ Provider>      
  	);
}

