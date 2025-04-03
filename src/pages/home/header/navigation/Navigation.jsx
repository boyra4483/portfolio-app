import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import classes from "./navigation.module.css";

function Navigation() {
  return (
    <ul className={classes["navigation"]}>
      <li>
        <Link to="/" title="home page">
          Home
        </Link>
      </li>
      <li>
        <a href="#about" title="about me">
          About
        </a>
      </li>
      <li>
        <a href="#projects" title="projects section">
          Projects
        </a>
      </li>
      <li>
        <Button color={"black"}>Contacts</Button>
      </li>
    </ul>
  );
}

export { Navigation as default };
