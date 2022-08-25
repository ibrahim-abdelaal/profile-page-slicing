import { render, screen, fireEvent } from '@testing-library/react';
import { ProfileForm } from '../ProfileForm';

/**
 * Click button by name
 * 
 * @param {string} name
 * @returns {void}
 */
const clickButtonByName = (name: string): void => {
  const button = screen.getByRole('button', { name });
  fireEvent.click(button);
};

/**
 * Add value to first name input field
 * 
 * @param {string} value
 * @returns {void}
 */
const AddValueToFirstNameInput = (value: string): void => {
  const inputElement = screen.getByLabelText(/first name/i);
  fireEvent.change(inputElement, { target: { value } });
};

describe('Test ProfileForm component', () => {
  it('should render text passed to first name filed', () => {
    render(<ProfileForm />);
    AddValueToFirstNameInput('Jhon Due');
    const divElement = screen.getByDisplayValue(/jhon/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should clear first name input field after cancel', () => {
    render(<ProfileForm />);
    AddValueToFirstNameInput('Jhon Due');
    clickButtonByName('Cancel');
    const divElement = screen.queryByDisplayValue(/jhon/i);
    expect(divElement).not.toBeInTheDocument();
  });
});

