import React, { useState } from "react";
import { Link } from "react-router-dom";

export const StudentNavbar = () => {
  const linkList = [
    { name: "HOME", url: "/home" },
    { name: "Exams", urls: "/exams" },
    { name: "Attendace", url: "/att" },
    { name: "Settings", url: "/settings" },
  ];
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-500">
              STUDENT DASHBOARD
            </h1>
          </div>
          {/* dektop menu */}
          <div className="hidden items-center gap-8 md:flex">
            {/* <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            Exams
          </a>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            Attendance
          </a>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600">
            Settings
          </a> */}
            {linkList.map((elm) => {
              return (
                <Link
                  to={elm.url}
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  {elm.name}
                </Link>
              );
            })}
          </div>
          {/* dektop profile */}
          <div className="hidden md:block">
            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
              Profile
            </button>
          </div>
          {/* hamburger button */}

          <button
            onClick={() => {
              setisMenuOpen(true);
            }}
            className="rounded-lg p-2 text-gray-800 md:hidden"
          >
            {isMenuOpen ? (
              <svg
                className="size-6"
                fill="none"
                stroke="CurrentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* overlay */}
      {isMenuOpen && (
        <>
          <div
            onClick={() => {
              setisMenuOpen(false);
            }}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          ></div>

          {/* drawer */}
          <div
            className={`fixed left-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* drawer header */}
            <div className="flex items-center justify-between border-b border-gray-500 px-5 py-5">
              <h1 className="text-2xl font-bold text-blue-500">
                STUDENT DASHBOARD
              </h1>
            </div>
            {/* drawer menu */}
            <div className="flex flex-col gap-6 px-6 py-6">
              {linkList.map((elm) => {
                return (
                  <Link className="text-lg font-medium text-gray-500 hover:text-blue-500">
                    {elm.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
