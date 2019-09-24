import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = props => {
  return (
  <View>
    <Image source={props.imageSource} /> 
    <Text style={styles.text}>{props.title}</Text>
    <Text style={styles.text}>{props.score}</Text>
  </View>);
   
};
const styles = StyleSheet.create({});

export default ImageDetail;