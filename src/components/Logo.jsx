import styles from "../css/Logo.module.css";

function Logo() {
  return (
    <img
      src="https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/11-worldwise/starter/logo.png?raw=true"
      alt="WorldWise logo"
      className={styles.logo}
    />
  );
}

export default Logo;
