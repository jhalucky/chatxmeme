import type { Message } from "../../types/chat";

type Props = {
  messages: Message[];
  setMessages: (m: Message[]) => void;
};

const MessageEditor = ({ messages, setMessages }: Props) => {
  const updateMessage = (id: string, key: keyof Message, value: any) => {
    setMessages(
      messages.map((m) =>
        m.id === id ? { ...m, [key]: value } : m
      )
    );
  };

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        text: "New message",
        sender: "them",
      },
    ]);
  };

  const removeMessage = (id: string) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-3 bg-white dark:bg-black p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <h3 className="font-semibold text-sm">Messages</h3>

      {messages.map((m) => (
        <div key={m.id} className="space-y-2">
          <textarea
            value={m.text}
            onChange={(e) =>
              updateMessage(m.id, "text", e.target.value)
            }
            className="w-full p-2 text-sm rounded bg-neutral-100 dark:bg-neutral-900 outline-none dark:text-white" 
          />

          <div className="flex items-center gap-3 text-xs">
            <select
              value={m.sender}
              onChange={(e) =>
                updateMessage(m.id, "sender", e.target.value)
              }
              className="px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800"
            >
              <option value="them">Them</option>
              <option value="me">Me</option>
            </select>

            {m.sender === "me" && (
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={m.seen || false}
                  onChange={(e) =>
                    updateMessage(m.id, "seen", e.target.checked)
                  }
                />
                Seen
              </label>
            )}

            <button
              onClick={() => removeMessage(m.id)}
              className="ml-auto text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addMessage}
        className="w-full py-2 text-sm rounded bg-blue-500 text-white"
      >
        + Add Message
      </button>
    </div>
  );
};

export default MessageEditor;
