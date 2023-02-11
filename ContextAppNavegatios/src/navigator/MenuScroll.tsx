import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pantalla1 from '../screens/MenuScroll/Pantalla1';
import Pantalla2 from '../screens/MenuScroll/Pantalla2';
import Pantalla3 from '../screens/MenuScroll/Pantalla3';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes/styles';
const Tab = createMaterialTopTabNavigator();

const MenuScroll = () => {
    const validateColor = (value: Boolean) => {
        return value ? colors.textMenu : 'gray';
    };
    const getIcon = (key: 'Inicio' | 'Pantalla2' | 'Pantalla3', focused: Boolean) => {

        switch (key) {
            case 'Inicio':
                return <Icon name="person-circle-sharp" size={25} color={validateColor(focused)} />;
            case 'Pantalla2':
                return <Icon name="chatbubble-ellipses-sharp" size={26} color={validateColor(focused)} />;
            case 'Pantalla3':
                return <Icon name="call-sharp" size={26} color={validateColor(focused)} />;
            default:
                break;
        }
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'white',
                    borderBottomWidth: 0,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIndicatorContainerStyle: {
                    backgroundColor: 'white',
                },
            }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen name="Chats" component={Pantalla1}
                options={{ tabBarIcon: ({ focused }) => getIcon('Inicio', focused) }}
            />
            <Tab.Screen name="Sleep" component={Pantalla2}
                options={{ tabBarIcon: ({ focused }) => getIcon('Pantalla2', focused) }}
            />
            <Tab.Screen name="Card" component={Pantalla3}
                options={{ tabBarIcon: ({ focused }) => getIcon('Pantalla3', focused) }}
            />
        </Tab.Navigator >
    );
};
export default MenuScroll;
