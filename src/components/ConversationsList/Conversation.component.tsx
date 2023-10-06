import { IConversation, TMessageStatus } from '../../types/Conversation';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import { ReadStatusIcon } from '../ReadStatusIcon/ReadStatusIcon.component';

import './style.css';

export function ConversationComponent(props: IConversation) {
  return (
    <div className="convo-container convo" idFor={`convo-${props?.id}`}>
      <ProfilePictureComponent source={props?.picture} />
      <div className="middle-container">
        <span>{props?.name}</span>
        <div className="message">
          <ReadStatusIcon status={props?.status} />
          <span>{props?.message}</span>
        </div>
      </div>
      <div className="sent-pinned">
        <span>{props?.lastSent}</span>
        <>{props?.pinned && <i className="bi bi-pin-angle-fill pinned"></i>}</>
      </div>
    </div>
  );
}
