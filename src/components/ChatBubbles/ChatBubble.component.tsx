import { IChatBubble } from '../../types/chat';
import { ReadStatusIcon } from '../ReadStatusIcon/ReadStatusIcon.component';

import './style.css';

export function ChatBubbleComponent(props: IChatBubble) {
  return (
    <div
      className={`chat-bubble-container ${
        props?.isSender ? 'left-margin' : 'right-margin'
      }`}
    >
      {!props.isSender && (
        <i className="material-icons">sentiment_very_satisfied</i>
      )}
      <div className={`chat-bubble ${props?.isSender ? 'white' : 'green'}`}>
        <span>{props?.message}</span>
        <span className={'timestamp'}>{props?.timeStamp}</span>
        {!props?.isSender && <ReadStatusIcon status={props?.status} />}
      </div>
      {props.isSender && (
        <i className="material-icons">sentiment_very_satisfied</i>
      )}
    </div>
  );
}
