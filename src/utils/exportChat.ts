import { toPng } from "html-to-image";

export const exportChat = async (
  setLoading?: (v: boolean) => void
) => {
  try {
    setLoading?.(true);

    const node = document.getElementById("chat-export");
    if (!node) {
      alert("Chat not found");
      return;
    }

    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "chatmeme.png";

    // 👇 THIS is important
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error(err);
    alert("Failed to export image");
  } finally {
    setLoading?.(false);
  }
};


export type Message = {
  id: string;
  text: string;
  sender: "me" | "them";
  seen?: boolean;
  isTyping?: boolean;
};
