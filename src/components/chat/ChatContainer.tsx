import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import Watermark from "./WaterMark";
import type { Message, Profile } from "../../types/chat";
import TypingIndicator from "./TypingIndicator";
import type { ChatPlatform } from "../../types/chat";


type Props = {
  profile: Profile;
  messages: Message[];
  platform: ChatPlatform;
};



const ChatContainer = ({ profile, messages, platform }: Props) => {
    const isIG = platform === "instagram";
  return (
   <div
  id="chat-export"
  className={`
    w-[380px] h-[640px] rounded-2xl overflow-hidden
    ${isIG
      ? "bg-gradient-to-b from-[#1c1c1e] to-black border border-neutral-800"
      : "bg-black border border-neutral-900"}
  `}
>
  <ChatHeader profile={profile} />

  <div
    className="flex-1 overflow-y-auto px-3 py-2
               space-y-1
               bg-neutral-50 dark:bg-neutral-950"
  >
    {messages.map((msg) => (
      <MessageBubble key={msg.id} message={msg} platform={platform}/>
    ))}

    {messages.some((m) => m.isTyping) && <TypingIndicator />}
  </div>

  <Watermark />
</div>

  );
};

export default ChatContainer;


