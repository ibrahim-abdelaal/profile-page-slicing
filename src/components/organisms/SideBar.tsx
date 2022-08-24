import { FC } from 'react';
import { animeImage } from '../../assets/imgages';
import { CircleImage } from '../atoms';
import { NavBar } from '../molecules/NavBar';

export const SideBar: FC<{}> = ({}) => (
  <div className='flex flex-col jsutify-between items-center'>
    <NavBar />
    <div className='mt-44 mb-0'>
      <CircleImage src={animeImage} />
    </div>
  </div>
);