import { IConversation } from '../../types/Conversation';
import { ConversationsComponent } from '../ConversationsList/Conversations.component';
import { CryptographyComponent } from '../LeftBar/Cryptography.component';
import { HeaderButtonComponent } from '../LeftBar/HeaderButton.component';
import { LeftBarHeaderComponent } from '../LeftBar/LeftBarHeader.component';
import { SearchBarComponent } from '../LeftBar/SearchBar.component';

import './style.css';

export function LeftBarComponent(props: { data: IConversation }) {
  return (
    <div className="left-bar">
      <LeftBarHeaderComponent />
      <SearchBarComponent />
      <ConversationsComponent data={props?.data} />
      <CryptographyComponent />
    </div>
  );
}
