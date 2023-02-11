import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import ButtonIcon from '../../customButton/ButtonIcon';

export const Pantalla1 = () => {
    const { autState } = useContext(AuthContext);

    return (
        <ButtonIcon name={autState.favoriteIcon ? autState.favoriteIcon : 'car'} />
    );
};

export default Pantalla1;
