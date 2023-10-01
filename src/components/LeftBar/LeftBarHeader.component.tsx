import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';

import './style.css';

export function LeftBarHeaderComponent() {
  return (
    <div className={'header'}>
      <ProfilePictureComponent source={'https://github.com/Redwars22.png'} />
      <div>
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'people-fill'}
          title={'aaaaaaaa'}
        />
      </div>
    </div>
  );
}
