import  { platformTheme } from "../../contants/platformThemes";
import type { ChatPlatform, Message } from "../../types/chat";

type Props = {
  message: Message;
  platform: ChatPlatform;
};

const MessageBubble = ({ message, platform }: Props) => {
  const isMe = message.sender === "me";
  const theme = platformTheme[platform];

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[78%] px-4 py-2 text-sm leading-snug text-white
          ${isMe ? theme.me : theme.them}
          ${platform === "instagram"
            ? isMe
              ? "rounded-3xl rounded-br-lg"
              : "rounded-3xl rounded-bl-lg"
            : "rounded-3xl rounded-br-lg"}
        `}
      >
        {message.text}

        {isMe && message.seen && platform === "x" && (
          <div className="mt-1 text-[10px] text-white/70 text-right">
            Seen
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;

