export function ChatAreaButtonComponent(props: { icon: string }) {
  return (
    <button className={'chatarea-button'}>
      <i className={'material-icons'}>{props?.icon}</i>
    </button>
  );
}
