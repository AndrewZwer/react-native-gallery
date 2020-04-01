import React from "react";
import { ScrollView, Button } from "react-native";

import Header from "../../components/header";
import PicturesList from "../../components/pictures-list";

const HomeScreen = ( { navigation } ) =>{
	return(
		<ScrollView>
    		<Header />
    		<PicturesList navigation={navigation}/>
    	</ScrollView>	
	)
}

export default HomeScreen;