import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

  test('adds player to list', () => {
    render(<App />);
    userEvent.type(screen.getByLabelText('playerNameInput'), 'Daigo')
    screen.getByText(/add/i).click();
    expect(screen.getByText(/daigo/i)).toBeInTheDocument();
  });

  test('removes player form list with a single one', () => {
    render(<App />);
    userEvent.type(screen.getByLabelText('playerNameInput'), 'Daigo')
    screen.getByText(/add/i).click();

    const player = screen.getAllByTestId('player')[0];
    within(player).getByLabelText('remove').click();

    const allPlayers = screen.queryAllByTestId('player');

    expect(allPlayers.length).toEqual(0);
  });
});
