import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import { sublinks, social } from "../../data/menus_data";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const { user } = useAuth0();

  return (
    /* assigns classes based on whether the state is true */
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {sublinks.map((link, id) => {
          const { page } = link;
          return (
            <li key={id}>
              <a href={"/products"}>{page}</a>
            </li>
          );
        })}
        {user && (
          <li onClick={closeSidebar}>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
