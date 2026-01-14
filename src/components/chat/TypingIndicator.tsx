const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div
        className="px-3 py-2 rounded-2xl rounded-bl-md
                   bg-neutral-200 dark:bg-neutral-800
                   flex gap-1 items-center"
      >
        <span className="typing-dot delay-0" />
        <span className="typing-dot delay-1" />
        <span className="typing-dot delay-2" />
      </div>
    </div>
  );
};

export default TypingIndicator;
