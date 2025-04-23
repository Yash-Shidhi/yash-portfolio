import { useState, useCallback } from "react";
import { Download, Loader } from "lucide-react";
import { useTheme } from "../../components/ThemeToggle";

const ResumeDownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useTheme();

  const handleDownload = useCallback(async () => {
    setIsLoading(true);
    try {
      const resumeUrl = "yash.pdf";
      const response = await fetch(resumeUrl);

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Yash_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
        ${
          isDark
            ? "bg-indigo-700 text-white hover:bg-indigo-600"
            : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
        } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      <span>{isLoading ? "Downloading..." : "Download Resume"}</span>
    </button>
  );
};

export default ResumeDownloadButton;
