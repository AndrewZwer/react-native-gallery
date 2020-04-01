import React from "react";

import {View, Text, Image} from "react-native";

import styles from "./style"; 

const PictureItem = ( { picture } ) => {
	const { picThumbUrl, description, userName } = picture;

	const noDescription = "*no description*";

	return (
		<View style={styles.imageContainer}>
			<Image source={{uri: picThumbUrl}}
					style={styles.pictureItem} 
					/>
			<Text style={styles.pictureDescription}>{description ? description : noDescription}</Text>
			<Text style={styles.pictureAuthor}>Author: {userName}</Text>
		</View>
	)
}

export default PictureItem;