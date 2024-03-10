import {View,Text } from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import { useContext } from 'react';
export default function Feed() {
  const [AccessToken, setAccessToken] = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{AccessToken}</Text>
        </View>
      );
  }