
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Employees from '../screens/Employees';

export type RootStackParams = {
    Pagina1: undefined,
    Pagina2: undefined,
    Pagina3: undefined,
    Employees: { id: number, name: string },
}


const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {

    return (

        <Stack.Navigator
            initialRouteName="Pagina1"
            screenOptions={{
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerShadowVisible: false,
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}


        >
            <Stack.Screen name="Pagina1"
                options={{ title: 'Pagina 1' }}
                component={Pagina1Screen} />
            <Stack.Screen name="Pagina2"
                options={{ title: 'Pagina 2' }}
                component={Pagina2Screen} />
            <Stack.Screen name="Pagina3"
                options={{ title: 'pagina 3' }}
                component={Pagina3Screen} />
            <Stack.Screen name="Employees"
                options={{ title: 'Employees' }}
                component={Employees} />
        </Stack.Navigator>
    );
};

export default Navigation;
