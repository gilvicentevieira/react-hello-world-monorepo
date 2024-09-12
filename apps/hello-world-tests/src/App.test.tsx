import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const textEl = screen.getByText(/hello world./i);
  expect(textEl).toBeInTheDocument();
});
