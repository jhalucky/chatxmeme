import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import Watermark from "./WaterMark";
import type { Message, Profile } from "../../types/chat";
import TypingIndicator from "./TypingIndicator";

type Props = {
  profile: Profile;
  messages: Message[];
};

const ChatContainer = ({ profile, messages }: Props) => {
  return (
   <div
  id="chat-export"
  className="w-[380px] h-[640px]
             bg-white dark:bg-black
             border border-neutral-200 dark:border-neutral-800
             rounded-xl overflow-hidden shadow-lg"
>
  <ChatHeader profile={profile} />

  <div
    className="flex-1 overflow-y-auto px-3 py-2
               space-y-1
               bg-neutral-50 dark:bg-neutral-950"
  >
    {messages.map((msg) => (
      <MessageBubble key={msg.id} message={msg} />
    ))}

    {messages.some((m) => m.isTyping) && <TypingIndicator />}
  </div>

  <Watermark />
</div>

  );
};

export default ChatContainer;
