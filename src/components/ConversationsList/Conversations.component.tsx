import { useEffect, useState } from 'react';
import { conversationsMock } from '../../mock/conversations.mock';
import { IConversation } from '../../types/Conversation';
import { ConversationComponent } from '../ConversationsList/Conversation.component';

export function ConversationsComponent() {
  const [data, setData] = useState<IConversation[] | []>([]);

  useEffect(() => {
    const convData: IConversation[] = conversationsMock;

    setData(convData);
  }, []);

  return (
    <>
      {data?.map((item: IConversation) => (
        <ConversationComponent
          picture={item?.picture}
          name={item?.name}
          message={item?.message}
          status={item?.status}
          pinned={item?.pinned}
          lastSent={item?.lastSent}
        />
      ))}
    </>
  );
}
