import { useState } from "react";
import { exportChat } from "../../utils/exportChat";

const ExportButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      onClick={() => exportChat(setLoading)}
      disabled={loading}
      className="w-full py-2 rounded-xl
                 bg-green-600 hover:bg-green-700
                 disabled:opacity-50
                 text-white text-sm font-medium"
    >
      {loading ? "Exporting..." : "Export as PNG"}
    </button>
  );
};

export default ExportButton;
