import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Contactus from "./Contactus/Contactus";
export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
      
    </>
  );
}
