import { Outlet } from "react-router-dom";
import AppNav from "./AppNavigation";
import styles from "../css/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      
      <AppNav />
      <Outlet/>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;