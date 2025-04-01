import classes from "./header.module.css";
import Navigation from "./navigation/Navigation";

function Header() {
  return (
    <header className={classes["header"]}>
      <span className={classes["devName"]}>BOYRA</span>
      <Navigation />
    </header>
  );
}

export { Header as default };
