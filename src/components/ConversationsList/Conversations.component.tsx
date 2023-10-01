import { useEffect, useState } from 'react';
import { IConversation } from '../../types/Conversation';

export function ConversationsComponent() {
  const [data, setData] = useState<IConversation | []>([]);

  useEffect(() => {
    setData();
  }, []);

  return <></>;
}
