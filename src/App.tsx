import { FC, useState } from 'react';
import { ChatAreaComponent } from './components/ChatArea/ChatArea.component';
import { LeftBarComponent } from './components/LeftBar/LeftBar.component';

import './style.css';

export const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <div className="whatsapp">
      {showSplash && <></>}
      {!showSplash && (
        <>
          <LeftBarComponent />
          <ChatAreaComponent />
        </>
      )}
    </div>
  );
};
