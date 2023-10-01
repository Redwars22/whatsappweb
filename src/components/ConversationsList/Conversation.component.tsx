import { IConversation, TMessageStatus } from '../../types/Conversation';
import { ProfilePictureComponent } from '../ProfilePicture/ProfilePicture.component';

export function ConversationComponent(props: IConversation) {
  return (
    <>
      <ProfilePictureComponent source={props?.picture} />
      <div></div>
      <div></div>
    </>
  );
}
