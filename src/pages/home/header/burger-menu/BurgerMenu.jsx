import classes from "./burgerMenu.module.css";
import Navigation from "../navigation/Navigation";

function BurgerMenu() {
  return (
    <nav className={classes["nav-mobile"]}>
      <section className={classes["burgerMenu"]}>
        <div className={classes["line"]}></div>
      </section>
      <Navigation />
    </nav>
  );
}

export { BurgerMenu as default };
