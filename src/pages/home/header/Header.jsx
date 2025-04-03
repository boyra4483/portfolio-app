import classes from "./header.module.css";
import Navigation from "./navigation/Navigation";

function Header() {
  return (
    <header className={classes["header"]}>
      <span className={classes["devName"]}>BOYRA</span>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
}

export { Header as default };
