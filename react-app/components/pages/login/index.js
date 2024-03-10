import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View,TouchableOpacity,Image  } from 'react-native';
import {ReactDOM, useState} from 'react'

export default function App() {

  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const logo = {uri: 'https://reactnative.dev/img/tiny_logo.png'};

  const login =()=>{
    let msg = 'Invalid email or password. Please try again';
    let msgtitle = 'Invalid credentials'
    if(email === 'johnrey.soler@lafilgroup.com' && password === 'password'){
      msgtitle = 'Successfully login'
      msg = 'login successfully'
    }
    Alert.alert(msgtitle,msg)
    
    
  }

  const forgotpassword = () =>{
    Alert.alert('Forgot password');
  }

  const createnewaccount = () =>{
    Alert.alert('create new account');
  }

  return (
    <View style={[styles.container,styles.contentcenter ]}>
      <View style={ [styles.containerfluid,styles.contentcenter]}>
        <View>
        <Image
        style = {{ width : 100, height:100}}
        source={logo}/>
        </View>
        <View>
          <Text style={ [styles.fontColor,styles.headertext] }>Welcomes Back</Text>
        </View>
        <View>
          <Text style={ styles.label2}>Sign to Continue</Text>
        </View>
        <View style={{ marginTop:50,width:'100%'}}>
          <View style={{ width:'100%',alignItems:'center',marginBottom:20}}>
            <View style={ styles.formcontrol }>
                <View style={ styles.inputtext}>
                  <Text style={styles.formText}>Email</Text>
                    <TextInput style={styles.formInput} placeholder='example@email.com' 
                    onChangeText={(value) => {setemail(value)}}>
                    </TextInput>
                </View>
            </View>
          </View>
          <View style={{ width:'100%',alignItems:'center',marginBottom:10}}>
            <View style={ styles.formcontrol }>
                <View style={ styles.inputtext}>
                  <Text style={styles.formText}>Password</Text>
                  <TextInput style={styles.formInput} placeholder='********' secureTextEntry={true}
                  onChangeText={(value) => {setpassword(value)}}>
                  </TextInput>
                </View>
            </View>
          </View>
          <View style={{ width:'100%',alignItems:'center',marginBottom:20}}>
            <View style={ [styles.formcontrol]}>
                <TouchableOpacity onPress={forgotpassword}>
                    <Text style={{ alignSelf:'flex-end',color:'#003BBD'}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={{ width:'100%',alignItems:'center',marginBottom:20}}>
            <View style={ styles.formcontrol}>
                <TouchableOpacity style={[styles.bgcolor,styles.btnlogin]} onPress={login}>
                  <Text style={{alignSelf:'center',fontSize:20,color:'#ffff'}}>Login</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={{ width:'100%',alignItems:'center',marginBottom:20}}>
            <View style={[styles.formcontrol]}>
              <View style={{ flexDirection: 'row',alignSelf:'center' }}>
                  <Text>Don't have account? </Text>
                  <TouchableOpacity onPress={createnewaccount}><Text style={styles.fontColor}>create a new account</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentcenter:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
  },
  containerfluid:{
    width:'90%'
  },
  headertext : {
    fontSize:40,
    fontWeight:'bold'
  },
  label2:{
    color: '#C8CDED'
  },  
  formcontrol:{
    width:'90%',
  },
  inputtext : {
    width:'100%',
    height:50,
    borderColor:'#E8EDF1',
    borderWidth:1,
    paddingHorizontal:10,
    borderRadius:3,
  },
  formInput:{
    width:'100%',
    height:'80%',
    fontSize:17,
    paddingHorizontal:5,
  },
  formText:{
    fontSize:12,
    marginTop:-10,
    backgroundColor:'#ffff',
    alignSelf: 'flex-start',
    paddingHorizontal:10,
  },
  fontColor : {
    color:'#003BBD'
  },
  bgcolor:{
    backgroundColor:'#003BBD'
  },
  btnlogin:{
    paddingVertical:10,
    borderRadius:3
  },
});
