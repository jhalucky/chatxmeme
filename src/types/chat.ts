// Who sent the message
export type Sender = "me" | "them";

// Single message type
export type Message = {
  id: string;
  text: string;
  sender: Sender;

  // Instagram-style metadata
  seen?: boolean;
  timestamp?: string;

  // Future upgrades (safe to keep now)
  isTyping?: boolean;
  reactions?: string[]; // 😂 ❤️ 👍
};

// Profile shown in chat header
export type Profile = {
  name: string;
  avatar: string;
  verified?: boolean;
};

// Theme mode
export type ThemeMode = "light" | "dark";

// Full chat state (for Zustand later)
export type ChatState = {
  profile: Profile;
  messages: Message[];
  theme: ThemeMode;
};

