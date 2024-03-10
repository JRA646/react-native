import { useState,useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Feed from "./components/layouts/drawer/Feed";
import Login from "./components/layouts/stack/Login";
import Logout from "./components/layouts/drawer/Logout";
import GetStarted from "./components/layouts/stack/GetStarted";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [AccessToken, setAccessToken] = useState(null);
  const [skipintro, setskipintro] = useState(false);

  return (
    <AuthContext.Provider value={[AccessToken, setAccessToken,skipintro,setskipintro]}>
      <NavigationContainer>
        {AccessToken !== null ? <AppDrawer/> : <AppStack/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

function AppStack() {
  const [AccessToken, setAccessToken,skipintro] = useContext(AuthContext)
  if(skipintro){
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );

  
}

function AppDrawer() {
  return (
    <Drawer.Navigator //screenOptions={{ headerShown: false }}
    drawerContent={(props) => <Logout {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}
