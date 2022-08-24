import { FC } from 'react';
import { ProfileSection } from '../components/organisms/ProfileSection';
import { SideBar } from '../components/organisms/SideBar';

export const MyProfilePage: FC = () => (
  <div className='p-2 flex'>
    <SideBar />
    <ProfileSection />
  </div>
);