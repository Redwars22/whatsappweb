import { useEffect, useState } from 'react';
import { chatMocks } from '../../mock/chat.mock';
import { conversationsMock } from '../../mock/conversations.mock';
import { IChatBubble } from '../../types/chat';
import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';
import { DateTimeHeaderComponent } from '../ChatArea/DateTimeHeader.component';
import { WriteMessageAreaComponent } from '../ChatArea/WriteMessageArea.component';
import { ChatBubbleComponent } from '../ChatBubbles/ChatBubble.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import './style.css';

export function ChatAreaComponent(props: {
  data: [],
  user: string
}) {
  const [messages, setMessages] = useState<IChatBubble[] | []>();

  useEffect(() => {
    const data: IChatBubble[] = props?.data[props?.user];

    setMessages(data);
  }, []);

  return (
    <div className="chat-area">
      <div className="chatarea-header">
        <ProfilePictureComponent source={conversationsMock[0].picture} />
        <div className="chatarea-username-container">
          <span>{conversationsMock[0].name}</span>
          <span className="status">Online </span>
        </div>
        <div>
          <ChatAreaButtonComponent icon={'search'} />
          <ChatAreaButtonComponent icon={'more_vert'} />
        </div>
      </div>
      <div className="messages-area">
        <DateTimeHeaderComponent timeStamp={'HOJE'} />
        <>
          {messages?.map((message) => (
            <ChatBubbleComponent
              isSender={message?.isSender}
              message={message?.message}
              timeStamp={message?.timeStamp}
              status={message?.status}
            />
          ))}
        </>
      </div>
      <WriteMessageAreaComponent />
    </div>
  );
}
