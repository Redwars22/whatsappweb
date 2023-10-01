import { FC } from 'react';
import { ChatAreaComponent } from './components/ChatArea/ChatArea.component';
import { LeftBarComponent } from './components/LeftBar/LeftBar.component';

import './style.css';

export const App = () => {
  return (
    <div className="whatsapp">
      <LeftBarComponent />
      <ChatAreaComponent />
    </div>
  );
};
