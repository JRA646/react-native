import { AuthContext } from '../../../Context/AuthContext';
import { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList,DrawerItem} from "@react-navigation/drawer";

export default function Logout(props) {
  const [AccessToken, setAccessToken] = useContext(AuthContext)

  const Logout = ()=>{
    setAccessToken(null)
  }
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={Logout} />
        </DrawerContentScrollView>
        
    );
  }