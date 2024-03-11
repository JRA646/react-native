import {View,Text, TouchableOpacity,StyleSheet,TextInput  } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import {style} from '../../../assets/style/stylesheet.js'
import { useState,useContext  } from 'react';
import axios from "axios"; 
export default function CreateTodo({ navigation }) {
  const [AccessToken, setAccessToken,skipintro,setskipintro,user, setuser] = useContext(AuthContext)
  const [title, settitle] = useState();
  const [description, setdescription] = useState()

  const CreateTask = () =>{
    axios.post('http://127.0.0.1:8000/api/todo/store',{
      title : title,
      description : description,
      category : 1,
      user : user.id
    })
    .then(function (response) {
      // console.log(user.id)
      navigation.navigate('Todos')
    })
.catch(function (error) {
    console.log(error)
})
    
}
   return (
        <View style={style.container}>
          <View style={[style.w90]}>
            <View style={[style.formcontrol,{marginBottom:25}]}>
              <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Task Name</Text>
              <TextInput  onChangeText={(value)=> settitle(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
            </View>
            <View style={[style.formcontrol,{marginBottom:25}]}>
              <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Task Description</Text>
              <TextInput 
              multiline={true}
              numberOfLines={4}
              onChangeText={(value)=> setdescription(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
            </View>
            <TouchableOpacity style={[style.btnprimary,style.borderRadius]} onPress={CreateTask}>
              <Text style={[style.textlight,style.textcenter]}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[style.btnprimary,style.bglight,style.borderRadius,{borderWidth:1,marginTop:5}]} onPress={()=> navigation.navigate('Todos')}>
                <Text style={[style.textcenter]}>Cancel</Text>
            </TouchableOpacity>
        
          </View>
        </View>
      );
  }

  const styles = StyleSheet.create({
    inputlabel : {
        marginTop:-15,
    },
    phorizontal1 : {
        paddingHorizontal : 10
    }
  })