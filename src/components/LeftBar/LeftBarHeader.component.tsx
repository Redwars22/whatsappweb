import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';

export function LeftBarHeaderComponent() {
  return (
    <>
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
    </>
  );
}
