import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


describe('<App/>', () => {

  const addPlayer = playerName => {
    userEvent.type(screen.getByLabelText('playerNameInput'), playerName)
    screen.getByTestId(/add/i).click();
  }

  const removePlayer = playerName => {
    const playerToBeDeleted = screen.getAllByTestId('player').find(p => within(p).getByTestId('name').textContent == playerName)
    within(playerToBeDeleted).getByLabelText('remove').click();
  }

  const allPlayerNames = () => screen.queryAllByTestId('player').map(p => within(p).getByTestId('name').textContent);

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
    screen.getByTestId(/add/i).click();

    expect(screen.getByText(/daigo/i)).toBeInTheDocument();
  });

  test('removes player form list with a single one', () => {
    render(<App />);
    addPlayer('Daigo');
    removePlayer('Daigo')

    expect(allPlayerNames()).toEqual([]);
  });

  test('removes player form list with multiple ones', () => {
    render(<App />);
    addPlayer('Daigo');
    addPlayer('Ricky');
    removePlayer('Daigo');

    expect(allPlayerNames()).toEqual(['Ricky']);
  });

  test('does not allow empty names to be added on list', () => {
    render(<App />);
    screen.getByTestId(/addPlayer/i).click();

    const validationErrorMessage = screen.getByText(/Please write a player name before adding it to the list/i);
    expect(validationErrorMessage).toBeInTheDocument();




  })
});
