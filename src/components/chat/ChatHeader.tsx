import type { Profile } from "../../types/chat";
import VerifiedBadge from "./VerifiedBadge";

type Props = {
  profile: Profile;
};

const ChatHeader = ({ profile }: Props) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2
                    border-b border-neutral-200 dark:border-neutral-800
                    bg-white dark:bg-black">
      
      <span className="text-xl leading-none cursor-default">‹</span>

      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-8 h-8 rounded-full object-cover"
      />

      <div className="flex items-center gap-1 text-sm font-semibold">
        {profile.name}
        {profile.verified && <VerifiedBadge />}
      </div>
    </div>
  );
};

export default ChatHeader;
