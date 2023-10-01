import { conversationsMock } from '../../mock/conversations.mock';
import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import './style.css';

export function ChatAreaComponent() {
  return (
    <>
      <div className="chatarea-header">
        <ProfilePictureComponent source={conversationsMock[0].picture} />
        <div className="chatarea-username-container">
          <span>{conversationsMock[0].name}</span>
          <span className="status">Online</span>
        </div>
        <div>
          <ChatAreaButtonComponent icon={'search'} />
          <ChatAreaButtonComponent icon={'three-dots-vertical'} />
        </div>
      </div>
    </>
  );
}
