import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../context/AuthContex';

const Pantalla2 = () => {
    const { sinIng, logaut, autState, autState: { isloading } } = useContext(AuthContext);
    return (
        <View>
            <Text style={{ fontSize: 25, }}>

                {JSON.stringify(autState)}
            </Text>
            {isloading ? <Button title="Close Seccion" onPress={() => logaut()} /> :
                <Button title="SinIn" onPress={() => sinIng()} />}
        </View>
    );
};

export default Pantalla2;
