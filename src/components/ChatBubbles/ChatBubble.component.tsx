import { IChatBubble } from "../../types/chat";

export function ChatBubbleComponent(props: IChatBubble){
  return(
    <div className={`chat-bubble ${props.isSender ? 'white' : 'green'}`}></div>
  );
}