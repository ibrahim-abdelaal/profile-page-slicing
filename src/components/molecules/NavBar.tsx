import { FC, useState } from 'react';
import { ChartPieIcon, CircleImage, ClipBoardIcon, IconButton, PrimaryButton, PuzzleIcon, QuestionMarkIcon, RippleIcon, SelectField } from '../atoms';
import { sImage } from '../../assets/imgages';
import { languageOptions } from '../../assets/dummuData';

export const NavBar: FC<{}> = ({}) => {
  const [lang, setLang] = useState<string>('En');
  
  /**
   * Handle selection change
   * 
   * @param {string} selection
   * @returns {void}
   */
  const handleSelectChange = (selection: string): void => {
    setLang(selection);
  };

  return (
    <div className='flex flex-col items-center justify-between'>
      <div className='mb-3'>
        <CircleImage src={sImage} />
      </div>
      <div className='mb-3'>
        <PrimaryButton name='+' isSquare onClick={() => {alert('+++')}} />
      </div>
      <IconButton href='#' children={<ClipBoardIcon />} />
      <IconButton href='#' children={<PuzzleIcon />} />
      <IconButton href='#' children={<RippleIcon />} />
      <IconButton href='#' children={<ChartPieIcon />} />
      <IconButton href='#' children={<QuestionMarkIcon />} />
      <div className='mt-4'>
        <SelectField onChange={handleSelectChange} value={lang} options={languageOptions} />
      </div>
   </div>
  );
};