import { View, Text, TouchableOpacity, StyleSheet, TextInput,ActivityIndicator } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import { style } from '../../../assets/style/stylesheet.js'
import { useState, useContext, useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
export default function CreateTodo({ navigation, route }) {
  const [AccessToken, setAccessToken, skipintro, setskipintro, user, setuser] = useContext(AuthContext)
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('')
  const [status,setstatus] = useState(false)
  const { itemId, otherParam } = route.params;
  const [loading, setloading] = useState(false)
  const isFocused = useIsFocused();

  const submit = ()=>{
    if(itemId !==0){
      update()
    }
    else{
      CreateTask()
    }
  }
  const CreateTask = () => {
    setloading(true)
    axios.post('http://10.97.92.84:8000/api/todo/store', {
      title: title,
      description: description,
      status: status,
      category: 1,
      user: user.id
    })
      .then(function (response) {
        navigation.navigate('Todos')
      })
      .catch(function (error) {
        console.log(error)
      })
      setloading(false)
  }

  const update = ()=>{
    setloading(true)
    axios.patch('http://10.97.92.84:8000/api/todo/patch/', {
      id : itemId,
      title: title,
      description: description,
      status: status,
      category: 1,
      user: user.id
    })
      .then(function (response) {
        navigation.navigate('Todos')
      })
      .catch(function (error) {
        console.log(error)
      })
      setloading(false)
  }

  const tagasdone = ()=>{
    setloading(true)
    axios.patch('http://10.97.92.84:8000/api/todo/patch/', {
      id : itemId,
      title: title,
      description: description,
      status: true,
      category: 1,
      user: user.id
    })
      .then(function (response) {
        navigation.navigate('Todos')
      })
      .catch(function (error) {
        console.log(error)
      })
      setloading(false)
  }
  useEffect(() => {
    if (isFocused) {
      axios.get('http://10.97.92.84:8000/api/todo/update/' + itemId,)
        .then(function (response) {
         result = response.data[0]
          settitle(result.title)
          setdescription(result.description)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [isFocused]);

  return (
    <View style={style.container}>
      {loading?
            <ActivityIndicator size="large" />:null
            }
      <View style={[style.w90]}>
        {itemId !== 0 ?
        <View style={{marginBottom:20,alignSelf:'flex-end'}}>
          <TouchableOpacity style={{backgroundColor:'lightgreen',padding:10,borderRadius:10}} onPress={tagasdone}>
            <Text style={{color:'#fff'}}>Tag as done</Text>
          </TouchableOpacity>
        </View>: null}
        <View style={[style.formcontrol, { marginBottom: 25 }]}>
          <Text style={[styles.inputlabel, style.bglight, styles.phorizontal1, style.asflexstart]}>Task Name</Text>
          <TextInput onChangeText={(value) => settitle(value)} style={[styles.phorizontal1]} value={title}></TextInput>
        </View>
        <View style={[style.formcontrol, { marginBottom: 25 }]}>
          <Text style={[styles.inputlabel, style.bglight, styles.phorizontal1, style.asflexstart]}>Task Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(value) => setdescription(value)} style={[styles.phorizontal1]} value={description}></TextInput>
        </View>
        <TouchableOpacity style={[style.btnprimary, style.borderRadius]} onPress={submit}>
          <Text style={[style.textlight, style.textcenter]}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.btnprimary, style.bglight, style.borderRadius, { borderWidth: 1, marginTop: 5 }]} onPress={() => navigation.navigate('Todos')}>
          <Text style={[style.textcenter]}>Cancel</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputlabel: {
    marginTop: -15,
  },
  phorizontal1: {
    paddingHorizontal: 10
  }
})