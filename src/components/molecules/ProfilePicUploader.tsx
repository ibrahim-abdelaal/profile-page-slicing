import { FC } from 'react';
import { ProfilePic, SecondaryButton } from '../atoms';
import { defaultProfileImage } from '../../assets/imgages';

export const ProfilePicUploader: FC<{}> = ({}) => (
  <div className='flex'>
    <ProfilePic src={defaultProfileImage} />
    <div className='self-end'>
      <SecondaryButton name="Choose an image" onClick={()=> {alert('works')}}/>
    </div>
  </div>
);