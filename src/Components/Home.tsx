import React from "react";

const Home: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-white text-slate-900 py-16 px-6 text-center shadow-sm border-b border-slate-200">
      {/* Subtle dot-grid backdrop for texture, matching the card system */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-500 mb-4">
          Directory
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
          User Dashboard
        </h1>
        <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
          Manage, view, and explore complete contact profiles and company
          details in real time.
        </p>
      </div>
    </header>
  );
};

export default Home;
