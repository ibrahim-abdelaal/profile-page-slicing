import { FC } from 'react';
import { iImage } from '../../assets/imgages';
import { CircleImage, Heading } from '../atoms';
import { ProfileForm } from '../molecules/ProfileForm';
import { ProfilePicUploader } from '../molecules/ProfilePicUploader';

export const ProfileSection: FC<{}> = ({}) => (
  <div className='flex p-1'>
    <div className='ml-5 mr-5'>
      <div className='mb-5'>
        <Heading text='My Profile' />
      </div>
      <ProfilePicUploader />
      <ProfileForm />
    </div>
    <div className='mt-36 ml-32'>
    <CircleImage src={iImage} borderColor='blue-600' />
    </div>
</div>
);