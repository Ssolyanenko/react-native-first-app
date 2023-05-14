import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { FullInfo } from "./FullInfo";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createNativeStackNavigator();

export const Navigation = ()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{title:'shop'}} />
         <Stack.Screen name="FullInfo" component={FullInfo} options={{title:'descriptions'}} />
        </Stack.Navigator>
        </NavigationContainer>

    )
}
