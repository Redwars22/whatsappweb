/**/

import { IChatBubble } from '../types/chat';

export const chatMocks = {
  Emanoel: [
    {
      isSender: false,
      message: 'Oi, tudo bem?',
      timeStamp: '13:35',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Oi, tudo bem sim e você?',
      timeStamp: '13:40',
      status: 'read',
    },
    {
      isSender: false,
      message: 'Estou bem, obrigado. O que você tem feito ultimamente?',
      timeStamp: '13:45',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Eu tenho trabalhado muito ultimamente. E você?',
      timeStamp: '13:50',
      status: 'read',
    },
    {
      isSender: false,
      message:
        'Eu também tenho trabalhado muito. Mas eu consegui tirar um tempo para viajar no fim de semana passado.',
      timeStamp: '13:55',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Legal! Para onde você foi?',
      timeStamp: '14:00',
      status: 'read',
    },
    {
      isSender: false,
      message: 'Eu fui para a praia. Foi muito relaxante.',
      timeStamp: '14:05',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Que legal! Eu adoro a praia. Qual praia você foi?',
      timeStamp: '14:10',
      status: 'read',
    },
    {
      isSender: false,
      message:
        'Eu fui para a Praia do Rosa. É uma praia muito bonita aqui em Santa Catarina.',
      timeStamp: '14:15',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Eu nunca fui lá. Eu deveria visitar algum dia.',
      timeStamp: '14:20',
      status: 'read',
    },
    {
      isSender: false,
      message:
        'Sim, você deveria. É muito bonito lá. E tem muitas coisas para fazer.',
      timeStamp: '14:25',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Eu vou considerar isso. Obrigado pela dica.',
      timeStamp: '14:30',
      status: 'read',
    },
    {
      isSender: false,
      message: 'De nada. Foi bom conversar com você.',
      timeStamp: '14:35',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Também foi bom conversar com você. Até a próxima!',
      timeStamp: '14:40',
      status: 'read',
    },
    {
      isSender: false,
      message: 'Até mais!',
      timeStamp: '14:45',
      status: 'read',
    },
    {
      isSender: true,
      message: 'Tchau!',
      timeStamp: '14:50',
      status: 'read',
    },
    {
      isSender: false,
      message: 'Tchau!',
      timeStamp: '14:55',
      status: 'read',
    },
    {
      isSender: true,
      message: '...',
      timeStamp: '15:00',
      status: 'read',
    },
    {
      isSender: false,
      message: '...',
      timeStamp: '15:05',
      status: 'read',
    },
  ] as IChatBubble[],
};
