import React from "react";

export const AnimationButton = ({ text }: { text: string }) => {
  return (
    <div>
      <button
        className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
        aria-label="AnimationButton"
      >
        {text}
      </button>
    </div>
  );
};

export const NormalButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
  return (
    <div>
      <button
        className="block w-full rounded-lg p-3 text-sm text-gray-600 font-medium transition hover:scale-105 border"
        onClick={onClick}
        type="submit"
        aria-label="NormalButton"
      >
        {text}
      </button>
    </div>
  );
};
