import React from "react";
import { Text, View, Image } from 'react-native';

import { connect } from "react-redux";

import styles from "./style";


const ImageScreen = ( { route, pictures } ) => {
	const { id } = route.params;
	const pictureObj = pictures.find((item) => item.id === id);

	return(
		<View>
      		<Image source={{uri: pictureObj.picFullUrl}} style={styles.imagesPosition}/>
    	</View>
	)
}

const mapStateToProps = ({ pictures }) => {
	return { pictures }
} 

export default connect(mapStateToProps)(ImageScreen);