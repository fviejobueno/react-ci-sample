import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


describe('<App/>', () => {

  const addPlayer = playerName => {
    userEvent.type(screen.getByLabelText('playerNameInput'), playerName)
    screen.getByText(/add/i).click();
  }

  const removePlayer = playerName => {
    const playerToBeDeleted = screen.getAllByTestId('player').find(p => within(p).getByTestId('name').textContent == playerName)
    within(playerToBeDeleted).getByLabelText('remove').click();
  }

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
    addPlayer('Daigo');
    removePlayer('Daigo')

    const allPlayers = screen.queryAllByTestId('player');

    expect(allPlayers.length).toEqual(0);
  });

  test('removes player form list with multiple ones', () => {
    render(<App />);
    addPlayer('Daigo');
    addPlayer('Ricky');
    removePlayer('Daigo');

    expect(screen.getByText(/ricky/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/daigo/i).length).toEqual(0);
  });
});
