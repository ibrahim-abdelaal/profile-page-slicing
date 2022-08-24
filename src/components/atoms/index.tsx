import { ChangeEvent, ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { BasicImageProps, BasicInputProps, ClickableImageProps, IconButtonProps } from './interfaces';

// Typography

const Heading: FC<{ text: string }> = ({ text }) => (
  <h2> { text } </h2>
);

// Buttons

export const PrimaryButton: FC<{ name: string, onClick: Function}> = ({ name, onClick }) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" className="py-2 px-5 bg-blue-800 text-white rounded-lg" onClick={ handleOnClick }>{ name }</button>
  );
};

export const SecondaryButton: FC<{ name: string, onClick: Function}> = ({ name, onClick }) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" className="py-2 px-5 border border-blue-800 text-blue-800 rounded-lg" onClick={ handleOnClick }>{ name }</button>
  );
};

export const IconButton: FC<{ href: string, children: JSX.Element }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 p-3 px-5 rounded-full"> { children } </a>
);

export const SelectButton: FC<{ name: string, onClick: Function}> = ({ name, onClick }) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" className="py-3 bg-red-600 rounded-lg w-full" onClick={ handleOnClick }>{ name }</button>
  );
};

// Inputs

export const InputField: FC<BasicInputProps>= ({ name, type, placeholder, value, onChange }) => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return (
    <div className='flex flex-col'>
      <label htmlFor={name}> { name } </label>
      <input id={name} type={type} placeholder={placeholder} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)} className="border border-transparent border-b-gray-400 placeholder-gray-400 py-3 px-5 focus:outline-none"></input>
    </div>
  );
};

export const SelectField: FC<BasicInputProps> = ({name, type, placeholder, value, onChange }) => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return (
    <div className='flex flex-col'>
    <label htmlFor={name}> { name } </label>
    <select placeholder={placeholder} className="" >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  );
};

// Images

export const ProfilePic: FC<BasicImageProps> = ({ src, width, height, topRounded }) => (
  <img src={src} className={`${width ? `w-${width}` : ''} ${height ? `h-${height}` : ''} ${topRounded ? 'rounded-tl-lg rounded-tr-lg' : ''} `}></img>
);

export const CircleImage: FC<ClickableImageProps> = ({ src, href, width, height, topRounded }) => (
  <a href={href}>
    <img src={src} className={`${width ? `w-${width}` : ''} ${height ? `h-${height}` : ''} ${topRounded ? 'rounded-tl-lg rounded-tr-lg' : ''} `}></img>
  </a>
);

// Icons

export const QuestionMarkIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>

);
