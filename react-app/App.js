import { useState,useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Feed from "./components/layouts/drawer/Feed";
import Login from "./components/layouts/stack/Login";
import CustomDrawerContent from "./components/layouts/drawer/CustomDrawerContent";
import GetStarted from "./components/layouts/stack/GetStarted";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./components/layouts/drawer/Home";
import SignUp from "./components/layouts/stack/SignUp";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [skipintro, setskipintro] = useState(true);
  const [AccessToken, setAccessToken] = useState(null);
  const [user, setuser] = useState([]);

  return (
    <AuthContext.Provider value={[AccessToken,setAccessToken,skipintro,setskipintro,user, setuser]}>
      <NavigationContainer>
        {AccessToken !== null ? <AppDrawer/> : <AppStack/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

function AppStack() {
  const [AccessToken,setAccessToken,skipintro,setskipintro,user, setuser] = useContext(AuthContext)
  if(skipintro){
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );

  
}

function AppDrawer() {
  return (
    <Drawer.Navigator //screenOptions={{ headerShown: false }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
