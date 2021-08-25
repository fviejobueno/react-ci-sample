import { render, screen } from '@testing-library/react';
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
    userEvent.type(screen.getByLabelText('playerNameInput'), "Daigo")
    screen.getByText(/add/i).click();
    expect(screen.getByText(/daigo/i)).toBeInTheDocument();
  });


  test('does not allow empty names to be added on list', () => {
    render(<App />);
    screen.getByText(/add/i).click();

    const validationErrorMessage = screen.getByText(/Player name can not be empty/i);
    expect(validationErrorMessage).toBeInTheDocument();
  })
});
