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
const addValueToFirstNameInput = (value: string): void => {
  const inputElement = screen.getByLabelText(/first name/i);
  fireEvent.change(inputElement, { target: { value } });
};

/**
 * Add valid data to profile form
 * 
 * @returns {void}
 */
const addValidDataToProfileForm = (): void => {
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  fireEvent.change(firstNameInput, { target: { value: 'Jhon' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
};

describe('Test ProfileForm component', () => {
  it('should render text passed to first name filed', () => {
    render(<ProfileForm />);
    addValueToFirstNameInput('Jhon Due');
    const divElement = screen.getByDisplayValue(/jhon/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should clear first name input field after cancel', () => {
    render(<ProfileForm />);
    addValueToFirstNameInput('Jhon Due');
    clickButtonByName('Cancel');
    const divElement = screen.queryByDisplayValue(/jhon/i);
    expect(divElement).not.toBeInTheDocument();
  });

  it('should disable Save changes button if form is invalid', () => {
    render(<ProfileForm />);
    const saveChangesButton = screen.getByRole('button', { name: 'Save changes' });
    expect(saveChangesButton).toHaveAttribute('disabled');
  });

  it('should enable Save changes button if form is valid', () => {
    render(<ProfileForm />);
    addValidDataToProfileForm();
    const saveChangesButton = screen.getByRole('button', { name: 'Save changes' });
    expect(saveChangesButton).not.toHaveAttribute('disabled');
  });
});

