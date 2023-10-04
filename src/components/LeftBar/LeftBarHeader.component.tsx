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
          icon={'group'}
          title={'Comunidades'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'track_changes'}
          title={'Status'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'donut_small'}
          title={'Canais'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'textsms'}
          title={'Nova conversa'}
        />
        <HeaderButtonComponent
          action={function (): void {
            throw new Error('Function not implemented.');
          }}
          icon={'more_vert'}
          title={'Mais opções'}
        />
      </div>
    </div>
  );
}
