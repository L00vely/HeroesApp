import { render, screen } from '@testing-library/react';
import { PublicRouter } from '../../src/router/PublicRouter';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRouter />', () => {
    
    test('debe de mostrar el children si no está autenticatod', () => {
        
        const contextValue = {
            logged: false
        }
        
        render(
                <AuthContext.Provider value={ contextValue }>
                    <PublicRouter>
                        <h1>Ruta pública</h1>
                    </PublicRouter>
                </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy()
    });

    test('debe de navegar si está autenticado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Lovely',
                id: 'ABC'
            }
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>    
                        <Route path='login' element={
                            <PublicRouter>
                                <h1>Ruta pública</h1>
                            </PublicRouter>
                        }/>
                        <Route path='marvel' element={<h1>Página Marvel</h1>}/>
                    </Routes>      
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel') ).toBeTruthy();
    })
})