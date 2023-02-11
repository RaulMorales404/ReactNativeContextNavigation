import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from './Navigation';
import Configuration from '../screens/Settings';
import { useWindowDimensions } from 'react-native';
const Drawer = createDrawerNavigator();

const MenuLeft = () => {
    const { width, height } = useWindowDimensions();

    useEffect(() => {
    }, [width, height]);


    return (
        <Drawer.Navigator
            detachInactiveScreens={false}
            defaultStatus={width >= 810 ? 'open' : 'closed'}
           

        >
            <Drawer.Screen options={{ title: 'Home' }}
                name="Home" component={Navigation} />
            <Drawer.Screen
                options={{ title: 'Settings' }}
                name="Article" component={Configuration} />
        </Drawer.Navigator >
    );
};

export default MenuLeft;

