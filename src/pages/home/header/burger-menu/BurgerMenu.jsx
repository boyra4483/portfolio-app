import { useState } from "react";
import classes from "./burgerMenu.module.css";
import Navigation from "../navigation/Navigation";

function BurgerMenu() {
  const [status, setStatus] = useState("");

  function handleClick(e) {
    const elem = e.target;
    const parentElem = `nav[class~="${classes["nav-mobile"]}"]`;

    if (!elem.closest(parentElem)) return;
    status == "active" ? setStatus("") : setStatus("active");
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
