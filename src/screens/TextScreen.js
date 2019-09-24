import React,{useState} from 'react';
import { Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () => {
    const [password,setPassword] = useState('');
  return (
  <View>
      <Text>Enter Password:</Text> 
      <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} 
       onChangeText={(newValue) => setPassword(newValue)}/>
      {password.length<4 ? <Text>password must be 4 character</Text> : null}
  </View>);
   
};
const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor:'black',
        borderWidth: 1
    }
});

export default TextScreen;