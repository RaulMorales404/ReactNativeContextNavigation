import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/styles';
export const Pagina2Screen = () => {
    const navigate = useNavigation();
    useEffect(() => {
        navigate.setOptions({
            title: 'hola mundanos',
            headerBackTitle: 'Atras',
        });
    }, []);

    return (
        <View>
            <Text style={styles.title}>
                Pagina 2
            </Text>
            <Button
                onPress={() => navigate.navigate('Pagina3')}
                color="#1AA5FF" title="pagina 3 ir" />

        </View>
    );
};

export default Pagina2Screen;

