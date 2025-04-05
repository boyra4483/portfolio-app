import classes from "./header.module.css";
import Navigation from "./navigation/Navigation";
import BurgerMenu from "./burger-menu/burgerMenu";

function Header() {
  return (
    <header className={classes["header"]}>
      <span className={classes["devName"]}>BOYRA</span>
      <nav>
        <Navigation />
        <BurgerMenu />
      </nav>
    </header>
  );
}

export { Header as default };
