import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

test('Aparece un texto que dice: testing', () => {
    render(<App/>);
    const texto = screen.getByText(/Testing/i);
    expect(texto).toHaveTextContent('Testing')
})
