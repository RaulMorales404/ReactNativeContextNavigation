/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from 'react';
import { AuthReducer } from './AutReducer';

//como se ve la informacion
export interface defineAuthState {
    isloading: boolean,
    userName?: string,
    favoriteIcon?: string,
}
export const InicialStateAuth: defineAuthState = {
    isloading: false,
    userName: undefined,
    favoriteIcon: undefined,
};

//como luce y expone la info dentro del contexto

export interface authContextProps {
    autState: defineAuthState,
    sinIng: () => void;
    changeFavoIcon: (nameIcon: string) => void;
    logaut: () => void;
    changeName: (name: string) => void;

}

export const AuthContext = createContext({} as authContextProps);

export const AuthProvider = ({ children }: any) => {
    const [autState, dispatch] = useReducer(AuthReducer, InicialStateAuth);

    const sinIng = () => {
        dispatch({ type: 'singIn' });
    };
    const changeFavoIcon = (nameIcon: string) => {
        dispatch({ type: 'changeFavIcon', payload: nameIcon });
    };
    const logaut = () => {
        dispatch({ type: 'logaut' });
    };
    const changeName = (name: string) => {
        dispatch({ type: 'changeName', payload: name });
    };

    return (
        <AuthContext.Provider value={{
            autState,
            sinIng,
            changeFavoIcon,
            logaut,
            changeName,
        }}>
            {children}
        </AuthContext.Provider >
    );
};
