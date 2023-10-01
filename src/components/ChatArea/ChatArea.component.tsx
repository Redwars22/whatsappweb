import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import './style.css';

export function ChatAreaComponent() {
  return (
    <>
      <div className="chatarea-header">
        <ProfilePictureComponent source={''} />
        <div>
          <span>Usuário</span>
        </div>
      </div>
    </>
  );
}
