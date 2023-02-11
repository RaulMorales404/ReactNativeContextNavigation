import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContex';
import { styles } from '../themes/styles';

interface Props extends NativeStackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    const { changeName } = useContext(AuthContext);
    const [name, setName] = useState('');
    const goEmployes = () => {
        // navigation.push('Employees');
        changeName(name);
        navigation.navigate('Employees', {
            id: 123,
            name: name,
        });
    };

    return (
        <View>
            <Text style={styles.title}>
                Pagina1
            </Text>
            <Button title="ire pagina 2" onPress={() => navigation.navigate('Pagina2')} />
            <TextInput
                onChangeText={setName}
                value={name}
                placeholder="nombre "
            />
            <TouchableHighlight
                underlayColor="#999"
                onPress={goEmployes}>
                <Text style={styles.title}>Employes </Text>
            </TouchableHighlight>
        </View >
    );
};

export default Pagina1Screen;

