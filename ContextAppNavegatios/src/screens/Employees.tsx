/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/Navigation';

interface Props extends NativeStackScreenProps<RootStackParams, 'Employees'> { }

export const Employees = ({ navigation, route }: Props) => {

    const { name } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, []);
    return (
        <View>
            <Text style={styles.title}>
                Hola {name}
            </Text>
            <Button onPress={() => navigation.goBack()} title="volver " />
        </View>
    );
};
export default Employees;
