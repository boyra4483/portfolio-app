import { Link } from "react-router-dom";
import { useSectionsRef } from "../../../../contexts/ref-context/RefContext";
import Button from "../../../../components/button/Button";
import classes from "./navigation.module.css";

function Navigation() {
  const sectionsRef = useSectionsRef();

  function handleClick(e) {
    const section = sectionsRef.current.get(e.target.title);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <ul className={classes["navigation"]}>
      <li>
        <Link to="/" title="home page">
          Home
        </Link>
      </li>
      <li>
        <a onClick={handleClick} href="#about-me" title="about me">
          About
        </a>
      </li>
      <li>
        <a onClick={handleClick} href="#projects" title="projects section">
          Projects
        </a>
      </li>
      <li>
        <Button onClick={handleClick} color={"black"}>
          Contacts
        </Button>
      </li>
    </ul>
  );
}

export { Navigation as default };
