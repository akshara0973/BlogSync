// Login.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form inputs and button', () => {
  render(<Login isUserAuthenticated={() => {}} />);
  
  // Check input fields
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Check login button
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
test('shows error if login fields are empty', () => {
  render(<Login isUserAuthenticated={() => {}} />);
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  // Expect an error toast or message
  expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
});
