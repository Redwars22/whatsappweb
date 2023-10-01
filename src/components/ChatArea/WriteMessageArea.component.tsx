import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';

import './style.css';

export function WriteMessageAreaComponent() {
  return (
    <div className="write-message-area-component">
      <ChatAreaButtonComponent icon={'plus-lg'} />
      <input />
      <ChatAreaButtonComponent icon={'mic-fill'} />
    </div>
  );
}
