import { IHeaderButton } from '../../types/Header';

export function HeaderButtonComponent(props: IHeaderButton) {
  return (
    <button title="aaa">
      <i className={`bi bi-${props.icon}`}></i>
    </button>
  );
}
