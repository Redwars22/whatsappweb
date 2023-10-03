export function ChatBubbleComponent(props: IChatBubble){
  return(
    <div className={`chat-bubble ${props.isSender ? 'white' : 'green'}`}></div>
  );
}