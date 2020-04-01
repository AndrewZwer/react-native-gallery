import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";

import { connect } from "react-redux";
import { getPicturesRequest } from "../../actions";

import withUnsplashAPI from "../../hoc";

import PictureItem from "../picture-item";

import styles from "./style";

class PicturesList extends Component {

	componentDidMount() {
		const { UnsplashAPIservice } = this.props;

		const data = UnsplashAPIservice.getPictures()
			.then((data) => this.props.getPicturesRequest(data));
	}

	render () {
		const { pictures, navigation } = this.props;
		return (
			<View style={styles.imagesContainer}>
				{
					pictures.map((picture) => {
						return (
							<TouchableHighlight underlayColor="#ffffff"
								onPress={() => {
								navigation.navigate('ImageScreen', {
            						id: picture.id
            					})}}
            					key={picture.id}>
								<View>
									<PictureItem picture={picture} />
								</View>
							</TouchableHighlight>
						)
					})
				}
			</View>
		);
	}
}	

const mapStateToProps = ({ pictures }) => {
	return { pictures }
} 

const mapDispatchToProps = {
	getPicturesRequest
}

export default withUnsplashAPI()(connect(mapStateToProps, mapDispatchToProps)(PicturesList));





