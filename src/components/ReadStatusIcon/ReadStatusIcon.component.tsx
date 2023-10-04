import { TMessageStatus } from '../../types/Conversation';

import './style.css';

export function ReadStatusIcon(props: { status: TMessageStatus }) {
  const getIconFromStatus = (icon: TMessageStatus) => {
    switch (icon) {
      case 'read':
        return 'check-all';
      case 'delivered':
        return 'check-all';
      case 'sent':
        return 'check';
      case 'not-mine':
        return '';
      default:
        return '';
    }
  };

  return <i className={`bi bi-${getIconFromStatus(props?.status)}`}></i>;
}
