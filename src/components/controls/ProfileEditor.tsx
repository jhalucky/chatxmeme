import type { Profile } from "../../types/chat";
import { memeProfiles } from "../../presets/memeProfile";
import { imageToBase64 } from "../../utils/imagetoBase64";


type Props = {
  profile: Profile;
  setProfile: (p: Profile) => void;
};

const ProfileEditor = ({ profile, setProfile }: Props) => {
  return (
    <div className="space-y-3 bg-white dark:bg-black p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <h3 className="font-semibold text-sm dark:text-white">Profile</h3>

      {/* Presets */}
      <div className="flex gap-2 flex-wrap">
        {memeProfiles.map((p) => (
          <button
            key={p.name}
            onClick={() => setProfile(p)}
            className="px-3 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-500 hover:opacity-80"
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Name */}
      <input
        type="text"
        value={profile.name}
        onChange={(e) =>
          setProfile({ ...profile, name: e.target.value })
        }
        placeholder="Username"
        className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-900 outline-none dark:text-white"
      />

      {/* Avatar */}
    <input
  type="text"
  placeholder="Avatar image URL"
  className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-900"
  onBlur={async (e) => {
    try {
      const base64 = await imageToBase64(e.target.value);
      setProfile({ ...profile, avatar: base64 });
    } catch {
      alert("Failed to load image. Use a public image URL.");
    }
  }}
/>


      {/* Verified */}
      <label className="flex items-center gap-2 text-xs dark:text-white">
        <input
          type="checkbox"
          checked={profile.verified || false}
          onChange={(e) =>
            setProfile({ ...profile, verified: e.target.checked })
          }
        />
        Verified
      </label>
    </div>
  );
};

export default ProfileEditor;
