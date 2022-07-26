import { render, screen } from '@testing-library/react';
import App from './App';

test('render App test', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i); // регулярное выражения для поиска текста с игнорированием регистра
  expect(helloWorldElem).toBeInTheDocument();
});
