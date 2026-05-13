import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/side-navbar/sidebar";
import SearchForm from "../components/search-form/search-form";

const AppLayout = ({ isOpen, setIsOpen }) => {
  return (
    <div className="layout">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <SearchForm isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Outlet />
    </div>
  );
};

export default AppLayout;
