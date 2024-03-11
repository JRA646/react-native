import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import React, { useState, useContext, useEffect, useCallback, useFocusEffect } from 'react';
import axios from "axios";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from "@react-navigation/native";
export default function Todos({ navigation }) {
    const [AccessToken, setAccessToken, skipintro, setskipintro, user, setuser] = useContext(AuthContext)
    const [todos, settodos] = useState([])
    const [search, setsearch] = useState();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            fetchdata('')
        }
    }, [isFocused]);

    const fetchdata = (value) => {
        if (value) {
            let filterarr = todos.filter(o => o.title == value || o.description == value)
            settodos(filterarr)
        }
        else {
            axios.get('http://127.0.0.1:8000/api/todo/' + user.id)
                .then(function (response) {
                    settodos(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderBottomWidth: 1, marginVertical: 20, }}>
                <TextInput placeholder='Search' style={{ paddingHorizontal: 20, paddingVertical: 10, outlineStyle: 'none' }}
                    onChangeText={(value) => fetchdata(value)}></TextInput>
            </View>
            <FlatList
                style={{ width: '100%', paddingHorizontal: 5 }}
                data={todos}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text>{item.description}</Text>
                                <Text style={{ alignSelf: 'flex-end' }}>{item.created_at}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            >
            </FlatList>
            <View style={{ alignSelf: 'flex-end', margin: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: '100%' }} onPress={() => navigation.navigate('CreateTask')}>
                    <FontAwesome name='plus' style={{ fontSize: 20, padding: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}