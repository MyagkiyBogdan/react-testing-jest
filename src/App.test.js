import { render, screen, fireEvent } from '@testing-library/react';
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

  // findBy - асинхронный код
  // getBy - синхронный, точно есть в документе
  // queryBy - проверить что бы доказать что элемента нету, не гарантирует 100%

  test('render App not in document test', () => {
    render(<App />);
    const notInText = screen.queryByText(/not in text/i);
    expect(notInText).toBeNull();
  });

  test('render async data', async () => {
    render(<App />);
    screen.debug();
    const asyncData = await screen.findByText(/jhon/i);
    expect(asyncData).toBeInTheDocument();
    expect(asyncData).toHaveStyle({ color: 'red' });
  });

  test('click event', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('input event', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/name/i);
    expect(screen.getByTestId('value-elem')).toContainHTML('');
    // fireEvent - Искуственное событые, есть еще userEvent
    fireEvent.input(input, {
      target: { value: 'Hello Test' },
    });
    expect(screen.getByTestId('value-elem')).toContainHTML('Hello Test');
  });
});
