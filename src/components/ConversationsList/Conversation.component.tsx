import { IConversation, TMessageStatus } from '../../types/Conversation';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';

import './style.css';

export function ConversationComponent(props: IConversation) {
  const getIconFromStatus = (icon: string) => {
    switch (icon) {
      case 'read':
        return 'check-all';
      case 'delivered':
        return 'check-all';
      case 'sent':
        return 'check';
      case 'not-mine':
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="convo-container">
      <ProfilePictureComponent source={props?.picture} />
      <div className="middle-container">
        <span>{props?.name}</span>
        <div className="message">
          <i className={`bi bi-${getIconFromStatus(props?.status)}`}></i>
          <span>{props?.message}</span>
        </div>
      </div>
      <div className="sent-pinned">
        <span>{props?.lastSent}</span>
        <>{props?.pinned && <i className="bi bi-pin-angle-fill"></i>}</>
      </div>
    </div>
  );
}
