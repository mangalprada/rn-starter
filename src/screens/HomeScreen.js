import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hello</Text>
    <Button onPress={()=>navigation.navigate('Components')} title="component screen"/>
    <Button onPress={()=>navigation.navigate('List')} title="List screen"/>
    <Button onPress={()=>navigation.navigate('Image')} title="Image screen"/>
    <Button onPress={()=>navigation.navigate('Counter')} title="Counter screen"/>
    <Button onPress={()=>navigation.navigate('Color')} title="Color screen"/>
    <Button onPress={()=>navigation.navigate('Square')} title="Square screen"/>
    <Button onPress={()=>navigation.navigate('Text')} title="Text screen"/>
    <Button onPress={()=>navigation.navigate('Box')} title="Box screen"/>

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
