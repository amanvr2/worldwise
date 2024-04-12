import Sidebar from "./Sidebar";


import styles from "../css/AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    
    </div>
  );
}

export default AppLayout;
