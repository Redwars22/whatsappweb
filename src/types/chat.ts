import { TMessageStatus } from './Conversation';

export interface IChatBubble {
  isSender: boolean;
  message: string;
  timeStamp: string;
  status: TMessageStatus;
}
