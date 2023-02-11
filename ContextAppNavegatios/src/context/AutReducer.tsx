import { defineAuthState } from './AuthContex';

type AuthAction =
    | { type: 'singIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logaut' }
    | { type: 'changeName', payload: string }
export const AuthReducer = (state: defineAuthState, action: AuthAction): defineAuthState => {

    switch (action.type) {
        case 'singIn':
            return {
                ...state,
                isloading: true,
                userName: 'Arrachera',
            };
        case 'logaut':
            return {
                ...state,
                isloading: false,
                userName: undefined,
                favoriteIcon: undefined,
            };
        case 'changeName':
            return {
                ...state,
                userName: action.payload,
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };

        default:
            return state;
    }

}