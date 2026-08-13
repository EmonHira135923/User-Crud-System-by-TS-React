import React from "react";

const Home: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-6 text-center shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          USER DASHBOARD
        </h1>
        <p className="mt-3 text-blue-100 text-base max-w-xl mx-auto">
          Manage, view, and explore complete contact profiles and company
          details in real time.
        </p>
      </div>
    </header>
  );
};

export default Home;
