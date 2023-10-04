import { IHeaderButton } from '../../types/Header';

import './style.css';

export function HeaderButtonComponent(props: IHeaderButton) {
  return (
    <button className={'header-button'} title={props.title}>
      <i className={'material-icons'}>{props?.icon}</i>
    </button>
  );
}
