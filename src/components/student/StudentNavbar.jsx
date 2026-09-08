import React from "react";
import { Link } from "react-router-dom";

export const StudentNavbar = () => {

    const linkList = [
        {name:"HOME",url:"/home"},
        {name:"Exams",urls:"/exams"},
        {name:"Attendace",url:"/att"},
        {name:"Settings",url:"/settings"}
    ]

  return (
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
          {
            linkList.map((elm)=>{
                return <Link to={elm.url} className="font-medium text-gray-700 hover:text-blue-600">{elm.name}</Link>
            })
          }
        </div>
        {/* dektop profile */}
        <div className="hidden md:block">
          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};
