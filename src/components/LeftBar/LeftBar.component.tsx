import { ConversationsComponent } from '../ConversationsList/Conversations.component';
import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { LeftBarHeaderComponent } from '../LeftBar/LeftBarHeader.component';
import { SearchBarComponent } from '../LeftBar/SearchBar.component';

import './style.css';

export function LeftBarComponent() {
  return (
    <div className="left-bar">
      <LeftBarHeaderComponent />
      <SearchBarComponent />
      <ConversationsComponent />
    </div>
  );
}
