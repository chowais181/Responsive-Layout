import React from "react";
import style from "./layout.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const Layout = (props) => {
  // const { children } = props;

  return (
    <div className={style.layout}>
      <header className={style.header}>
        <h1>Learn Here</h1>
      </header>
      <aside className={style.aside}>
        <Sidebar />
      </aside>
      <div className={style.container}>
        <Outlet />
      </div>

      <footer className={style.footer}>
        <div className={style.footertext}>
          © {new Date().getFullYear()} Learn Here
        </div>
      </footer>
    </div>
  );
};

export default Layout;
