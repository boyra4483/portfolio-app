import { useReducer } from "react";
import classes from "./burgerMenu.module.css";
import Navigation from "../navigation/Navigation";
import statusReducer from "../status-reducer/statusReducer";

function BurgerMenu() {
  const [status, dispatch] = useReducer(statusReducer, "");

  function handleClick(e) {
    const elem = e.target;
    const parentElem = `nav[class~="${classes["nav-mobile"]}"]`;
    if (!elem.closest(parentElem)) return;

    dispatch({
      type: status == "" ? "opened-menu" : "closed menu",
    });
  }

  return (
    <nav
      className={`${classes["nav-mobile"]} ${
        status ? classes[status] : status
      }`}
    >
      <section onClick={handleClick} className={classes["burgerMenu"]}>
        <div className={classes["line"]}></div>
      </section>
      <Navigation />
    </nav>
  );
}

export { BurgerMenu as default };
