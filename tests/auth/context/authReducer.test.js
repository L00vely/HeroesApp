import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Prueba en authReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect( state ).toBe(state);
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Lovely'
            }
        }

        const state = authReducer( { logged: false }, action );
        expect( state ).toEqual({
            logged:true,
            user: action.payload
        })

    });
   
    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }

        const state = authReducer( { logged: true }, action );
        expect( state ).toEqual({
            logged:false
        })
    });
})