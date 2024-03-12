import {View,Text, StyleSheet,Image } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {style} from '../../../assets/style/stylesheet.js'


export default function GetStarted({ navigation }) {
    const [AccessToken, setAccessToken,skipintro,setskipintro] = useContext(AuthContext)
    const Login = ()=>{
        navigation.navigate('Login')
        setskipintro(true)
    }
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/images/intro.png')} style={[style.w100,style.h50]}/>
            <View style={[style.w90]}>
                <Text style={[style.textcenter,style.fwbold,styles.todolabel]}>To-Do List</Text>
                <Text style={styles.tododescription}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <TouchableOpacity style={[style.btnprimary,style.borderRadius,style.phorizontal3]} 
                onPress={Login}>
                <Text style={[style.textlight,{textAlign:'center'}]}>Get Started</Text>
                </TouchableOpacity>
          </View>
        </View>
      );
  }

  const styles = StyleSheet.create({
    todolabel :{
        paddingVertical:20,
        fontSize:30
    },
    tododescription : {
        marginBottom:20,
        textAlign : 'center'
    }
  })