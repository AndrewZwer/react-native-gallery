import React from "react";
import { Text, View } from 'react-native';

import styles from "./style";

const Header = () => {
	return(
		<View style={styles.header}>
			<Text style={styles.headerText}>Awesome gallery</Text>
			<Text style={styles.headerText}>Thanks for watching</Text>
		</View>
	);
};

export default Header;