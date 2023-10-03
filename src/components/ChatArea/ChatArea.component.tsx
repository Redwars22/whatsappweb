import { TRUE } from 'sass';
import { conversationsMock } from '../../mock/conversations.mock';
import { IChatBubble } from '../../types/chat';
import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';
import { WriteMessageAreaComponent } from '../ChatArea/WriteMessageArea.component';
import { ChatBubbleComponent } from '../ChatBubbles/ChatBubble.component';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';
import './style.css';

export function ChatAreaComponent() {
  const mock: IChatBubble[] = [
    {
      isSender: false,
      message: 'Exemplo, de teste teste e teste...',
      timeStamp: '13:35',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Exemplo, de teste teste e teste...',
      timeStamp: '13:40',
      status: 'read',
    }
  ];

  return (
    <div className="chat-area">
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
      <div>
        {mock.map((message) => (
          <ChatBubbleComponent
            isSender={message?.isSender}
            message={message?.message}
            timeStamp={message?.timeStamp}
            status={message?.status}
          />
        ))}
      </div>
      <WriteMessageAreaComponent />
    </div>
  );
}
