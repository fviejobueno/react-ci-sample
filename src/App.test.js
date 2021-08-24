import { render, screen } from '@testing-library/react';
import App from './App';


describe('<App/>', () => {

  test('renders title', () => {
    render(<App />);
    const title = screen.getByText(/My favorite Street Fighter players/i);
    expect(title).toBeInTheDocument();
  });

  test('renders notice when list is empty', () => {
    render(<App />);
    const title = screen.getByText(/Ops, no players to show/i);
    expect(title).toBeInTheDocument();
  });
});
