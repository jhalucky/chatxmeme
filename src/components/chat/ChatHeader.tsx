import type { Profile } from "../../types/chat";
import InstagramVerifiedBadge from "./VerifiedBadge";
import { DEFAULT_AVATAR } from "../../contants/defaultAvatar";

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
        src={profile.avatar || DEFAULT_AVATAR}
        alt={profile.name}
        className="w-10 h-10 rounded-full object-cover"
      />

      <div className="text-sm font-semibold leading-none">
  <span className="align-middle dark:text-white">
    {profile.name}
  </span>

  {profile.verified && (
    <span className="ml-1 inline-flex align-middle">
      <InstagramVerifiedBadge />
    </span>
  )}
</div>

    </div>
  );
};

export default ChatHeader;
