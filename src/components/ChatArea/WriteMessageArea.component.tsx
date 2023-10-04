import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';

import './style.css';

export function WriteMessageAreaComponent() {
  return (
    <div className="write-message-area-component">
      <ChatAreaButtonComponent icon={'add'} />
      <div className="write-message-input-container">
        <ChatAreaButtonComponent icon={'sentiment_very_satisfied'} />
        <input
          className="write-message-input"
          type="text"
          placeholder="Digite uma mensagem"
        />
      </div>
      <ChatAreaButtonComponent icon={'keyboard_voices'} />
    </div>
  );
}
