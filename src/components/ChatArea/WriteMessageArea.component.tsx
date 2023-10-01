import { ChatAreaButtonComponent } from '../ChatArea/ChatAreaButton.component';

import './style.css';

export function WriteMessageAreaComponent() {
  return (
    <div className="write-message-area-component">
      <ChatAreaButtonComponent icon={''} />
      <input />
      <ChatAreaButtonComponent icon={''} />
    </div>
  );
}
