import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import './style.css';

export function ChatAreaComponent() {
  return (
    <>
      <div className="chatarea-header">
        <ProfilePictureComponent source={''} />
        <div>
          <span>Usuário</span>
          <span>Online</span>
        </div>
        <div>
          <ChatAreaButtonComponent />
          <ChatAreaButtonComponent />
        </div>
      </div>
    </>
  );
}
