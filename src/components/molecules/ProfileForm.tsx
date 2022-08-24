  import { FC, useState } from 'react';
  import { countryOptions } from '../../assets/dummuData';
  import { InputField, PrimaryButton, SecondaryButton, SelectField } from '../atoms';

  export const ProfileForm: FC<{}> = ({}) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [email, setEamail] = useState<string>('');

    const handleSubmit = () => {
      alert('Submitted successfully!');
      clearInputs();
    }
    const handleCancel = () => clearInputs();

    const clearInputs = () => {
      setFirstName('');
      setLastName('');
      setCompanyName('');
      setNickname('');
      setCountry('');
      setEamail('');
    }

    return (
      <div className='w-96'>
        <InputField name='First name' type='text' onChange={setFirstName} value={firstName} bottomBorder />
        <InputField name='Last Name' type='text' onChange={setLastName} value={lastName} bottomBorder />
        <InputField name='Company Name' type='text' onChange={setCompanyName} value={companyName} bottomBorder />
        <InputField name='Nickname' type='text' onChange={setNickname} value={nickname} bottomBorder />
        <SelectField bottomBorder name='Country' options={countryOptions} onChange={setCountry} value={country} />
        <InputField name='Email address' type='email' onChange={setEamail} value={email} />
        <div className='mt-20'>
          <SecondaryButton name='Cancel' onClick={handleCancel} />
          <PrimaryButton name='Save changes' onClick={handleSubmit} />
        </div>
      </div>
    );
  };