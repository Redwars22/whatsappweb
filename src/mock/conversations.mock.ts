import { IConversation } from '../types/Conversation';

export const conversationsMock: IConversation[] = [
  {
    picture:
      'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/355388774_306998611871615_6907549877272558566_n.jpg?ccb=11-4&oh=01_AdQHVpcbrpCXv-3XLTYBDcSqQX7d36-iIJSAWu4eYbUBJg&oe=65269CE3&_nc_sid=000000&_nc_cat=109',
    name: 'Emanoel',
    status: 'delivered',
    message: 'Lorem ipsum dolor sit amet',
    pinned: true,
    lastSent: '12:16',
  },
  {
    picture:
      'https://i.pinimg.com/originals/d6/7f/cb/d67fcb293e7ab5d6fdd92cb9bc639b3b.png',
    name: 'Gabriel',
    status: 'sent',
    message: 'Lorem ipsum dolor sit amet',
    pinned: true,
    lastSent: '11:10',
  },
];
