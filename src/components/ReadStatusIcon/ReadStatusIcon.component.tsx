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

  return (
    <i
      className={`material-icons status-icon ${
        props?.status == 'read' ? 'blue-icon' : ''
      }`}
    >
      {getIconFromStatus(props?.status)}
    </i>
  );
}
