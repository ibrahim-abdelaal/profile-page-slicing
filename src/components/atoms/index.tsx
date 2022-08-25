import { ChangeEvent, ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { InputFieldProps, IconButtonProps, SelectFieldProps, PrimaryButtonProps, SecondaryButtonProps, CircleImageProps } from './interfaces';

// Typography

export const Heading: FC<{ text: string }> = ({ text }) => (
  <h4 className='text-5xl font-serif'> { text } </h4>
);

// Buttons

export const PrimaryButton: FC<PrimaryButtonProps> = ({ name, onClick, isSquare, isDisabled }) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    onClick();
  }

  return (
    <button disabled={isDisabled} type="submit" className={`${isSquare ? "bg-blue-800 text-white rounded-lg w-10 h-10 text-xl text-center" : "py-2 px-5 bg-blue-800 text-white rounded-lg"} ${isDisabled ? "bg-blue-400" : ""}`} onClick={ handleOnClick }>{ name }</button>
  );
};

export const SecondaryButton: FC<SecondaryButtonProps> = ({ name, onClick }) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" className="py-2 px-5 mr-5 border border-blue-800 text-blue-800 rounded-lg" onClick={ handleOnClick }>{ name }</button>
  );
};

export const IconButton: FC<IconButtonProps> = ({ href, children }) => (
  <a href={href} className="text-gray-400 p-4 px-5 rounded-full"> { children } </a>
);

// Inputs

export const InputField: FC<InputFieldProps>= ({ name, type, placeholder, value, onChange, bottomBorder }) => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return (
    <div className='flex flex-col'>
      <label className='mt-8 text-xs text-gray-400' htmlFor={name}> { name } </label>
      <input id={name} type={type} placeholder={placeholder ? placeholder : ''} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)} className={` ${bottomBorder ? 'border border-transparent border-b-gray-400' : ''} placeholder-gray-400 focus:outline-none pb-1`}></input>
    </div>
  );
};

export const SelectField: FC<SelectFieldProps> = ({name, bottomBorder, onChange, value, options }) => {

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = e => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return (
    <div className={`flex flex-col text-gray-400 ${bottomBorder ? 'border border-transparent border-b-gray-400 text-black' : ''} mt-10 pb-3`}>
      {name && <label  className='text-xs text-gray-400' htmlFor={name}> { name } </label>}
      <select onChange={handleSelectChange} >
        {options.map(option => (
          <option key={option.id}> { option.value } </option>
        ))}
      </select>
  </div>
  );
};

// Images

export const ProfilePic: FC<{ src: string }> = ({ src }) => (
  <div className="border border-gray-600 border-dashed h-20 w-20 rounded-full mr-2 overflow-hidden">
    <img src={src} ></img>
  </div>
);

export const CircleImage: FC<CircleImageProps> = ({ src, borderColor }) => (
  <div className={`my-3 h-8 w-8 rounded-full overflow-hidden ${borderColor ? `border border-${borderColor} p-2` : ''} flex justify-center items-center`}>
    <img src={src} ></img>
  </div>
);

// Icons

export const QuestionMarkIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

export const ChartPieIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
);

export const ClipBoardIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

export const RippleIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
  </svg>
);

export const PuzzleIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
  </svg>
);

export const InformationIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);
