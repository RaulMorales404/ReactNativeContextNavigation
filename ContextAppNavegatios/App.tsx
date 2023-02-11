
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/navigator/Menu';
import { AuthProvider } from './src/context/AuthContex';
// import MenuLeft from './src/navigator/MenuLeft';
// import BoottomMenu from './src/navigator/BoottomMenu';
// import Navigation from './src/navigator/Navigation';


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppState>
            <Menu />
        </AppState>
      </NavigationContainer>
    );

  }
}




const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
