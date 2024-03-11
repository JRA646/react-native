import { createStackNavigator } from "@react-navigation/stack";
import Todos from "../stack/Todos";
import CreateTodo from '../stack/CreateTodo';

export default function Home() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="CreateTask" component={CreateTodo} />
    </Stack.Navigator>
    );
  }