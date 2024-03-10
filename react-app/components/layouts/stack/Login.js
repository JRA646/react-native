import {View,Text,StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import { useContext, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../../../assets/style/stylesheet.js'

export default function Login() {
  const [AccessToken, setAccessToken,skipintro,setskipintro] = useContext(AuthContext)
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
   const Login = ()=>{
    setAccessToken(null)
    if(email === 'johnrey.soler@lafilgroup.com' && password === 'password'){
        setAccessToken('testing')
    }
    else{
        Alert.alert('Invalid Credentials','Incorrect email or password. Try again')
    }
  }
    return (
        <View style={style.container}>
            <View style={[style.w90]}>
                <View style={[style.formcontrol,{marginBottom:25}]}>
                    <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Email</Text>
                    <TextInput placeholder='example@email.com' onChangeText={(value)=> setemail(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
                </View>
                <View style={style.formcontrol}>
                    <Text style={[styles.inputlabel,style.bglight,styles.phorizontal1,style.asflexstart]}>Password</Text>
                    <TextInput placeholder='********' secureTextEntry={true} onChangeText={(value)=> setpassword(value)} style={[styles.phorizontal1,{outline: "none" }]}></TextInput>
                </View>
                
                <View style={{marginBottom:15}}>
                <TouchableOpacity>
                    <Text style={[style.asflexend,style.textprimary,style.tdunderline]}>Forgot Password?</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={[style.btnprimary,style.borderRadius]} onPress={Login}>
                    <Text style={[style.textlight,style.textcenter]}>Login</Text>
                </TouchableOpacity>
                <View style={{marginVertical:20}}>
                    <View style={[style.ascenter,style.fdrow]}>
                        <Text>Don't have account? </Text>
                        <TouchableOpacity><Text style={style.textprimary}>create a new account</Text></TouchableOpacity>
                    </View>
                </View>
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