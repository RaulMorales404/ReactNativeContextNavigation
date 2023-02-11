import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Navigation from './Navigation';
import Configuration from '../screens/Settings';
import { useWindowDimensions } from 'react-native';
import BoottomMenu from './BoottomMenu';
const Drawer = createDrawerNavigator();

const Menu = () => {
    const { width } = useWindowDimensions();



    return (
        <Drawer.Navigator
            detachInactiveScreens={false}
            defaultStatus={width >= 810 ? 'open' : 'closed'}
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'white',
                    borderBottomWidth: 0,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                },

                drawerStyle: {
                    backgroundColor: 'white',
                },
                sceneContainerStyle: {
                    backgroundColor: 'white',
                }



            }}


        >
            <Drawer.Screen name="Tab" component={BoottomMenu} />
            <Drawer.Screen name="Article" component={Configuration} />
        </Drawer.Navigator>
    );
};

export default Menu;

