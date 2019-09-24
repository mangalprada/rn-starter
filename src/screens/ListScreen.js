import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends=[ 
        {name:'friend #1'},
        {name:'friend #2'},
        {name:'friend #3'},
        {name:'friend #4'},
        {name:'friend #5'},
        {name:'friend #6'},
        {name:'friend #7'},
        {name:'friend #8'},
        {name:'friend #9'}
    ];
    return (
    <FlatList 
    keyExtractor={friend=> friend.name}
     data={friends}  
     renderItem={({item})=>{return <Text style={styles.textStyle}>{item.name}</Text>;}}/>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});

export default ListScreen;