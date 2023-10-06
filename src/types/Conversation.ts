export interface IConversation {
  picture: string;
  name: string;
  message: string;
  status: TMessageStatus;
  pinned: boolean;
  lastSent: string;
  id?: number;
}

export type TMessageStatus = 'read' | 'sent' | 'delivered' | 'not-mine';
