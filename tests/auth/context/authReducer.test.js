import { authReducer, types } from "../../../src/auth";

describe('Pruebas en el authReducer', () => { 

    const initialState = {
        logged: false,
    };

    const user = {
        name: 'MarenTests',
        id: 123
    }
    
    test('debe de devolver el estado por defecto', () => { 

        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);

     });

     test('login debe de establer el usuario y logueado', () => { 
        
        const loginAction = {
            type: types.login,
            payload: user
        }

        const {logged, user} = authReducer(initialState, loginAction);
        expect(logged).toBeTruthy();
        expect(user).toBe(user)

      });

     test('login debe de establer el usuario y logueado', () => { 
        
        const loginAction = {
            type: types.login,
            payload: user
        }
        
        const logoutAction = {
            type: types.logout
        }

        const loginState = authReducer(initialState, loginAction);
        const {logged} = authReducer(loginState, logoutAction);

        expect(logged).toBeFalsy();

      });

 });