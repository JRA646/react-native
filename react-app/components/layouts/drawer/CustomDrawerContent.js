import { AuthContext } from '../../../Context/AuthContext';
import { useContext, useState,useEffect } from 'react';
import { DrawerContentScrollView, DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import { View,Text,Image } from 'react-native';
import {style} from '../../../assets/style/stylesheet.js'

export default function Logout(props) {
  const [AccessToken, setAccessToken,skipintro,setskipintro,user, setuser] = useContext(AuthContext)
  const Logout = ()=>{
    setAccessToken(null)
  }
    return (
        <DrawerContentScrollView {...props}>
          <View>
            <View style={{backgroundColor:'#2970FE',marginTop:-5,paddingLeft:15,paddingVertical:20}}>
              <View>
                <View>
                <Image source={require('../../../assets/images/profile.jpg')} style={{width:100,height:100,borderRadius:100}}/>
                </View>
                <View>
                  <Text style={[style.textlight,{padding:2}]}>{user.name}</Text>
                  <Text style={[style.textlight]}>{user.email}</Text>
                </View>
              </View>
            </View>
            <View>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={Logout} />
            </View>
          </View>
        </DrawerContentScrollView>
        
    );
  }