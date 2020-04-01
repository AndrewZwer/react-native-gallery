import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 5,
    paddingTop: 20,
    flexWrap: "wrap"
  },
  pictureItem: {
  	width: 300,
  	height: 200
  },
  pictureDescription: {
  	flexWrap: "wrap",
  	alignItems: 'center',
    width: 300,
    paddingTop: 10
  },
  pictureAuthor: {
  	flexWrap: "wrap",
  	alignItems: 'center',
  	fontSize: 17,
  	paddingTop: 10
  }
});

export default styles;