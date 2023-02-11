import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pantalla1 from '../screens/BoottomScrens/Pantalla1';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from './Navigation';
import { colors } from '../themes/styles';
import MenuScroll from './MenuScroll';

const Tab = createBottomTabNavigator();

const BoottomMenu = () => {


    const validateColor = (value: Boolean) => {
        return value ? colors.textMenu : 'gray';
    };
    const getIcon = (key: 'Home' | 'Pantalla1' | 'Settings', focused: Boolean) => {

        switch (key) {
            case 'Home':
                return <Icon name="home-sharp" size={25} color={validateColor(focused)} />;
            case 'Pantalla1':
                return <Icon name="card-sharp" size={25} color={validateColor(focused)} />;
            case 'Settings':
                return <Icon name="bookmarks-sharp" size={25} color={validateColor(focused)} />;
            default:

                break;
        }
    };
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'orange',
                    borderTopWidth: 1,
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                },
                tabBarActiveTintColor: colors.textMenu,
            }}

            sceneContainerStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen name="Home" component={MenuScroll}
                options={{ tabBarIcon: ({ focused }) => getIcon('Home', focused) }}
            />
            <Tab.Screen name="Pantalla1" component={Pantalla1}
                options={{
                    tabBarIcon: ({ focused }) => getIcon('Pantalla1', focused),
                }}
            />
            <Tab.Screen name="Settings" component={Navigation}
                options={{ tabBarIcon: ({ focused }) => getIcon('Settings', focused) }}
            />
        </Tab.Navigator >
    );
};
export default BoottomMenu;
