export function ChatAreaButtonComponent(props: { icon: string }) {
  return (
    <button>
      <i className={`bi bi-${props.icon}`} />
    </button>
  );
}
