import { View, Text, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from "@react-navigation/native";
export default function Todos({ navigation }) {
    const [AccessToken, setAccessToken, skipintro, setskipintro, user, setuser] = useContext(AuthContext)
    const [todos, settodos] = useState([])
    const isFocused = useIsFocused();
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        if (isFocused) {
            fetchdata('')
        }
    }, [isFocused]);

    const fetchdata = (value) => {
        if (value) {
            axios.post('http://10.97.92.84:8000/api/todo/search',{
                user_id : user.id,
                filter : value
            })
                .then(function (response) {
                   settodos(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else {
            axios.get('http://10.97.92.84:8000/api/todo/' + user.id)
                .then(function (response) {
                    settodos(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        setloading(false)
    }

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [month, day,year].join('/');
    }
     

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading?
            <ActivityIndicator size="large" />:null
            }
            <View style={{ borderBottomWidth: 1, marginVertical: 20,width:'75%' }}>
                <TextInput placeholder='Search' style={{ paddingHorizontal: 20, paddingVertical: 10}}
                    onChangeText={(value) => fetchdata(value)}></TextInput>
            </View>
            {todos.length === 0 ?
            <View>
                <Text>No task available</Text>
            </View>
            :null}
            
            <FlatList
                style={{ width: '100%', paddingHorizontal: 5 }}
                data={todos}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <TouchableOpacity style={{ backgroundColor: item.status===0 ?'#fff':'lightgreen', width: '100%',padding: 10,borderRadius:10 }} 
                            disabled={ item.status===0 ? false :true}
                            onPress={() => navigation.navigate('CreateTask',{itemId: item.id})}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{maxWidth:'75%'}}>
                                        <Text>{item.description}</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
                                        <Text style={{ alignSelf: 'flex-end' ,textAlign:'right'}}>{ formatDate(item.created_at)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            >
            </FlatList>
            <View style={{ alignSelf: 'flex-end', margin: 10,borderRadius:'100%' }}>
                <TouchableOpacity  onPress={() => navigation.navigate('CreateTask',{itemId: 0})}>
                    <FontAwesome name='plus' style={{ fontSize: 20, padding: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}