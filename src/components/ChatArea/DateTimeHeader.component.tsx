import './style.css';

export function DateTimeHeaderComponent(props: { timeStamp: string }) {
  return (
    <div className="datetime">
      <span>{props?.timeStamp}</span>
    </div>
  );
}
