import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../themes/styles';
interface Props extends NativeStackScreenProps<any, any> {

}

export const Pagina3Screen = ({ navigation }: Props) => {

    return (
        <View>
            <Text style={styles.title}>
                Pagina 3
            </Text>
            <Button onPress={() => navigation.pop()}
                color="#1AA5FF"
                title="Regresar" />
            <Button onPress={() => navigation.popToTop()}
                color="#E55604"
                title="Pagina1" />
        </View>
    );
};

export default Pagina3Screen;

