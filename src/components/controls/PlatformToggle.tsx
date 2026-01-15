type Props = {
  platform: "instagram" | "x";
  setPlatform: (p: "instagram" | "x") => void;
};

const PlatformToggle = ({ platform, setPlatform }: Props) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setPlatform("instagram")}
        className={`px-3 py-1 rounded-full text-xs font-medium
          ${platform === "instagram"
            ? "bg-[#E1306C] text-white"
            : "bg-neutral-800 text-neutral-400"}`}
      >
        Instagram
      </button>

      <button
        onClick={() => setPlatform("x")}
        className={`px-3 py-1 rounded-full text-xs font-medium
          ${platform === "x"
            ? "bg-white text-black"
            : "bg-neutral-800 text-neutral-400"}`}
      >
        X
      </button>
    </div>
  );
};

export default PlatformToggle;
