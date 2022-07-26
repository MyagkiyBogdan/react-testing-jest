import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('render App test', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i); // регулярное выражения для поиска текста с игнорированием регистра
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/name/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // screen.debug();
    expect(input).toMatchSnapshot();
  });
});
