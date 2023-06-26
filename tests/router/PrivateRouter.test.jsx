import { render, screen } from '@testing-library/react';
import { PrivateRouter } from '../../src/router/PrivateRouter';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRouter />', () => {
    test('debe de mostrar el children si está autenticado', () => {
        
        const contextValue = {
            logged: true
        }
        
        // Función mimo del setItem del localStorage para almacenar el lastpath
        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                      
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/");

    });

})