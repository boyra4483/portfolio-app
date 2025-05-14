import { Link } from "react-router-dom";
import { useArticlesRef } from "../../../../contexts/ref-context/RefContext";
import Button from "../../../../components/button/Button";
import classes from "./navigation.module.css";

function Navigation({ dispatch }) {
  const articlesRef = useArticlesRef();

  function handleClick(e) {
    dispatch?.({
      type: "click nav-btn",
    });

    const article = articlesRef.current.get(e.target.title);
    article.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <ul className={classes["navigation"]}>
      <li>
        <Link onClick={handleClick} to="/portfolio-app/" title="home page">
          Home
        </Link>
      </li>
      <li>
        <a onClick={handleClick} href="#about-me" title="about me">
          About
        </a>
      </li>
      <li>
        <a onClick={handleClick} href="#projects" title="projects">
          Projects
        </a>
      </li>
      <li>
        <Button dispatch={dispatch} color={"black"}>
          Contacts
        </Button>
      </li>
    </ul>
  );
}

export { Navigation as default };
