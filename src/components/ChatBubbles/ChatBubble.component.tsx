import { IChatBubble } from '../../types/chat';
import { ReadStatusIcon } from '../ReadStatusIcon/ReadStatusIcon.component';

import './style.css';

export function ChatBubbleComponent(props: IChatBubble) {
  return (
    <div className={`chat-bubble ${props?.isSender ? 'white' : 'green'}`}>
      <span>{props?.message}</span>
      {!props?.isSender && <ReadStatusIcon status={props?.status} />}
      <span className={'timestamp'}>{props?.timeStamp}</span>
    </div>
  );
}
