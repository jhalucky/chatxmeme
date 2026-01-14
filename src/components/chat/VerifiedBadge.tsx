const VerifiedBadge = () => {
  return (
    <svg
      aria-label="Verified"
      className="w-4 h-4 ml-1"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        fill="#0095F6"
        d="M20 0C9 0 0 9 0 20s9 20 20 20
           20-9 20-20S31 0 20 0z"
      />
      <path
        fill="#fff"
        d="M16.6 21.7l-3.3-3.3-2.1 2.1
           5.4 5.4L29 13.5l-2.1-2.1z"
      />
    </svg>
  );
};

export default VerifiedBadge;
