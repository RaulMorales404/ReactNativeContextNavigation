import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContex';
import { colors } from '../themes/styles';

type Props = {
    name: string
}

const ButtonIcon = ({ name = 'car' }: Props) => {
    const { changeFavoIcon } = useContext(AuthContext);
    return (
        <TouchableOpacity onPress={() => changeFavoIcon(name)}>
            <Icon name={name} size={50} color={colors.textMenu} />
        </TouchableOpacity>
    );
};
export default ButtonIcon;
