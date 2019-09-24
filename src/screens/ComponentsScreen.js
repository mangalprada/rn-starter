import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ComponentsScreen = () =>{
    return (
    <View>
            <Text style={styles.textStyle}> This is the ComponentsScreen </Text> 
            <Text>hi there</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle :{
        fontSize: 30
    }
});

export default ComponentsScreen;