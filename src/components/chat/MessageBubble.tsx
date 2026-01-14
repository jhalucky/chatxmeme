import type { Message } from "../../types/chat";

type Props = {
  message: Message;
};

const MessageBubble = ({ message }: Props) => {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[72%] px-3 py-2 text-sm leading-snug
          ${
            isMe
              ? "bg-[#3797F0] text-white rounded-2xl rounded-br-md"
              : "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-2xl rounded-bl-md"
          }
        `}
      >
        {message.text}

        {isMe && message.seen && (
          <div className="mt-1 text-[10px] text-right text-white/70">
            Seen
          </div>
        )}
      </div>
    </div>
  );
};


export default MessageBubble;
