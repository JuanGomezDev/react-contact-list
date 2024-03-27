/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import HeaderDivider from '../../src/components/HeaderDivider';

describe('Pruebas en el componente HeaderDivider', () => {
    test('debe renderizar el título correctamente', () => {
        const title = 'Mi Encabezado';
        render(<HeaderDivider title={title} />);
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeTruthy();
    });
    test('debe tener el título por defecto si no se proporciona', () => {
        render(<HeaderDivider />);
        const defaultTitle = 'Encabezado';
        const titleElement = screen.getByText(defaultTitle);
        expect(titleElement).toBeTruthy();
    });
});
