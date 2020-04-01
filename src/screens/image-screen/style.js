import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  imagesPosition: {
    width: width,
    height: height
  }
});

export default styles;