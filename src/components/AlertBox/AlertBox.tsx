import React from "react";
import { AlertBoxProps } from "../../types/index.ts";

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children,
}) => {
  const alertStyles: Record<string, string> = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div className={`p-4 border-l-4 rounded ${alertStyles[type]}`}>
      <div className="flex justify-between items-center gap-4">
        <div>
          <p className="font-medium">{message}</p>
          {children && <div className="mt-2 text-sm">{children}</div>}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close alert"
            className="ml-4 text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
