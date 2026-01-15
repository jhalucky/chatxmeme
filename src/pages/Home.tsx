import { useState } from "react";
import ChatContainer from "../components/chat/ChatContainer";
import ProfileEditor from "../components/controls/ProfileEditor";
import MessageEditor from "../components/controls/MessageEditor";
import ExportButton from "../components/controls/ExportButton";
import ThemeToggle from "../components/controls/ThemeToggle";
import type { Profile, Message } from "../types/chat";
import { DEFAULT_AVATAR } from "../contants/defaultAvatar";
import PlatformToggle from "../components/controls/PlatformToggle";


const Home = () => {
  const [profile, setProfile] = useState<Profile>({
    name: "Indian Mom",
    avatar: DEFAULT_AVATAR,
    verified: true,
  });

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Subah uthke phone hi chalana hai?", sender: "them" },
    { id: "2", text: "Bas 5 min aur 😭", sender: "me", seen: true },
  ]);

  const [platform, setPlatform] = useState<"instagram" | "x">("instagram");


  

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-neutral-100 dark:bg-neutral-900">
        <div className="flex justify-center md:justify-start">
      <ChatContainer profile={profile} messages={messages} platform={platform}/>
      </div>    

      

      <div className="space-y-4 md:col-span-2">
        <div className="flex justify-between items-center">
           <h2 className="font-semibold text-sm">Controls</h2>
            <ThemeToggle />
            <PlatformToggle platform={platform} setPlatform={setPlatform} />
        </div>

        <ProfileEditor profile={profile} setProfile={setProfile} />
        <MessageEditor messages={messages} setMessages={setMessages} />
        <ExportButton />
      </div>
    </div>
  );
};

export default Home;
