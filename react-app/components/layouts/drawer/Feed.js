import {View,Text,AsyncStorage, TouchableOpacity } from 'react-native';
import { useState,useContext,useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import axios from "axios"; 

export default function Feed() {
  
  const [todos, settodos] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      settodos(response.data)
    })
  .catch(function (error) {
    console.log(error);
  })
    
  })


  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text>{user}</Text> */}
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <View>
                  <View style={{flexDirection:'row'}}>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.completed ? 'Completed' : 'Procesing'}</Text>
                  </View>
                </View>
              )}
              >
            </FlatList>
        </View>
      );
  }