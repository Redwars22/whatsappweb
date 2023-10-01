import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';

import './style.css';

export function LeftBarHeaderComponent() {
  return (
    <div className={'header'}>
      <ProfilePictureComponent source={'https://github.com/Redwars22.png'} />
      <div className={'buttons-container'}>
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'people-fill'}
          title={'Comunidades'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'radar'}
          title={'Status'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'chat-quote-fill'}
          title={'Canais'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'people-fill'}
          title={'Nova conversa'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'people-fill'}
          title={'Mais opções'}
        />
      </div>
    </div>
  );
}
