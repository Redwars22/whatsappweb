import { FC, useEffect, useState } from 'react';
import { ChatAreaComponent } from './components/ChatArea/ChatArea.component';
import { LeftBarComponent } from './components/LeftBar/LeftBar.component';
import { SplashComponent } from './components/Splash/Splash.component';
import { fetchData } from './modules/fetch';
import './style.css';
import { IConversation } from './types/Conversation';

export const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [data, setData] = useState<{
    conversations: [];
    chats: [];
  }>();

  useEffect(() => {
    async function fetchChats() {
      const chatsData = await fetchData();

      setData(chatsData);
    }

    fetchChats();

    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  });

  return (
    <div className="whatsapp">
      {showSplash && <SplashComponent />}
      {!showSplash && (
        <>
          <LeftBarComponent data={data!.conversations} />
          <ChatAreaComponent data={data!.chats} />
        </>
      )}
    </div>
  );
};
