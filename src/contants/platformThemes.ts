import type { ChatPlatform } from "../types/chat";

export const platformTheme = {
  instagram: {
    me: "bg-[#3797F0]",
    them: "bg-[#262626]",
    chatBg: "bg-gradient-to-b from-[#121212] to-black",
  },
  x: {
    me: "bg-[#1D9BF0]",
    them: "bg-neutral-800",
    chatBg: "bg-black",
  },
} satisfies Record<ChatPlatform, any>;
