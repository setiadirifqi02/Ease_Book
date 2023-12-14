"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="btn text-white rounded-full px-12 border-opacity-0 bg-blue-500 hover:text-blue-600 hover:bg-white">
      {children}
    </button>
  );
}
