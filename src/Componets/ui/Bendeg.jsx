import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";

  const variants = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-gray-800 border border-gray-400",
  };

  return (
    <div className={`${base} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </div>
  );
}
