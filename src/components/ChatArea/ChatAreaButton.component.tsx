export function ChatAreaButtonComponent(props: { icon: string }) {
  return (
    <button className={'chatarea-button'}>
      <i className={`bi bi-${props.icon}`} />
    </button>
  );
}
