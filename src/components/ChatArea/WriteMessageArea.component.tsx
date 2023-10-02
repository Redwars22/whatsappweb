import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';

import './style.css';

export function WriteMessageAreaComponent() {
  return (
    <div className="write-message-area-component">
      <ChatAreaButtonComponent icon={'plus-lg'} />
      <div className="write-message-input-container">
        <i class="bi bi-emoji-smile"></i>
        <input className="write-message-input" type="text" />
      </div>
      <ChatAreaButtonComponent icon={'mic-fill'} />
    </div>
  );
}