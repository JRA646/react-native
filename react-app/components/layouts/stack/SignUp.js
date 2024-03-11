import {View,Text,StyleSheet } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import { useContext, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../../../assets/style/stylesheet.js'
import axios from "axios"; 

export default function SignUp({ navigation }) {
    const [AccessToken, setAccessToken,skipintro,setskipintro,user, setuser] = useContext(AuthContext)
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [Confirmedpassword, setConfirmedpassword] = useState()
    const CreateAccount = () =>{
        axios.post('http://127.0.0.1:8000/api/user/store',{
        email : email,
        password : password,
        name : name
        })
        .then(function (response) {
            setAccessToken(null)
            navigation.navigate('Login')
        })
    .catch(function (error) {
        setAccessToken(null)
    })
        
    }

    const Login = ()=> {
        navigation.navigate('Login')
    }
    return(
        <View style={style.container}>
            <View style={[style.w90]}>
                <View style={[style.formcontrol,{marginBottom:20}]}>
                    <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Email</Text>
                    <TextInput placeholder='Juan Dela Cruz' onChangeText={(value)=> setname(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
                </View>
                <View style={[style.formcontrol,{marginBottom:20}]}>
                    <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Email</Text>
                    <TextInput placeholder='example@email.com' onChangeText={(value)=> setemail(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
                </View>

                <View style={[style.formcontrol,{marginBottom:20}]}>
                    <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Password</Text>
                    <TextInput placeholder='********' secureTextEntry={true} onChangeText={(value)=> setpassword(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
                </View>

                <View style={[style.formcontrol,{marginBottom:20}]}>
                    <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Confirmed Password</Text>
                    <TextInput placeholder='********' secureTextEntry={true} onChangeText={(value)=> setConfirmedpassword(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
                </View>

                <TouchableOpacity style={[style.btnprimary,style.borderRadius]} onPress={CreateAccount} disabled = {password !== Confirmedpassword ? true:false}>
                    <Text style={[style.textlight,style.textcenter]}>Create account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.btnprimary,style.bglight,style.borderRadius,{borderWidth:1,marginTop:5}]} onPress={Login}>
                    <Text style={[style.textcenter]}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    inputlabel : {
        marginTop:-15,
    },
    phorizontal1 : {
        paddingHorizontal : 10
    }
  })