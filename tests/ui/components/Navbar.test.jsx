import { screen, render, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar />', () => {
    const contexValue = {
        logged: true,
        user :{
            name: 'David Perales'
        },
        logout: jest.fn()
    };

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el nombre de usuario', () => {
        render(
            <AuthContext.Provider value = { contexValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('David Perales') ).toBeTruthy();
    });

    test('debe de llamar el logout y navigate al hacer click en el botón', () => {

        render(
            <AuthContext.Provider value = { contexValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect( contexValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { "replace": true })
    });
});