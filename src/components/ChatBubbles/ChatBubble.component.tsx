import { IChatBubble } from '../../types/chat';

import './style.css';

export function ChatBubbleComponent(props: IChatBubble) {
  return (
    <div className={`chat-bubble ${props.isSender ? 'white' : 'green'}`}>
      <span>{props.message}</span>
      <span>{props.timeStamp}</span>
    </div>
  );
}
