import { FC, useEffect, useState } from 'react';
import { ProfilePic, SecondaryButton } from '../atoms';
import { defaultProfileImage } from '../../assets/imgages';

const fetchImage = async(): Promise<{url: string}> => {
  return await fetch('https://robohash.org/test');
}

export const ProfilePicUploader: FC<{}> = ({}) =>{
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const fetchedImaged = fetchImage();
    fetchedImaged.then((res) => setImage(res.url));
  }, []);
  
  return (
    <div className='flex'>
      {image && <ProfilePic src={image} />}
      <div className='self-end'>
        <SecondaryButton name="Choose an image" onClick={()=> {alert('works')}}/>
      </div>
    </div>
  );
};