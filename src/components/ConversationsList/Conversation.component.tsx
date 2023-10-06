import { useContext, useEffect } from 'react';
import { ConversationContext } from '../../context/ConversationContext';
import { IConversation, TMessageStatus } from '../../types/Conversation';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import { ReadStatusIcon } from '../ReadStatusIcon/ReadStatusIcon.component';

import './style.css';

export function ConversationComponent(props: IConversation) {
  const context = useContext(ConversationContext);

  useEffect(() => {
    const el = document
      .querySelector(`.convo-${props?.id}`)!
      .addEventListener('click', () => {
        window.alert(props?.name);
      });
  }, []);

  return (
    <div className={`convo-container convo-${props?.id}`}>
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
