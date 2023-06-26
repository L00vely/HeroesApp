import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/AppRouter';
import { AuthContext } from '../../src/auth'; 
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <AppRouter />', () => {
    test('debe mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
            
        );

        expect( screen.getAllByText('Login').length ).toBe(2);
    })

    test('debe mostrar el componenete de Marvil está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'David Perales'
            }
        }

        render(
            
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
            
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
    })
})