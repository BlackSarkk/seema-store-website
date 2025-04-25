import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  const [active, setActive] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "contact", label: "Contact" },
    { id: "login", label: "Login" },
  ];

  return (
    <div className="bg-myBlack min-h-screen flex flex-col">

      {/* Fixed Header */}
      <header className="fixed border-b border-myWhiteLight top-0 left-0 w-screen h-14 bg-myBlack z-50 text-myOrange font-extrabold font-primary flex items-center justify-center gap-1">
        <span className='text-4xl flex h-10 items-end tracking-normal sm:text-9xl'>SEEMA STORE</span>
        <span className='text-2xl flex h-10 items-end sm:text-9xl'>.co.in</span>
      </header>

      {/* Main Content */}
      <main className=" flex-1 m-2 mt-30 p-1 overflow-auto">
        <Outlet context={{ active, setActive }} />
      </main>

      {/* Spacer to offset fixed footer */}
      <div className="h-9" />

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 font-primary left-0 w-full h-8 bg-myWhite z-50">
        <div className="grid grid-cols-3 text-myWhite text-center h-full">
          {tabs.map((tab) => (
            <Link
              to={`/${tab.id}`}
              key={tab.id}
              className={`flex items-center justify-center h-full hover:bg-orange-600 
                ${active === tab.id ? "bg-myOrange text-myWhite uppercase" : " text-myBlack uppercase"}`}
              onClick={() => setActive(tab.id)} // Set the active tab
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </footer>

    </div>
  );
}
