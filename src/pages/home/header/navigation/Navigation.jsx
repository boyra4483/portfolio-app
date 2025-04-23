import { Link } from "react-router-dom";
import { useArticlesRef } from "../../../../contexts/ref-context/RefContext";
import Button from "../../../../components/button/Button";
import classes from "./navigation.module.css";

function Navigation() {
  const articlesRef = useArticlesRef();

  function handleClick(e) {
    const article = articlesRef.current.get(e.target.title);
    article.scrollIntoView({
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
        <a onClick={handleClick} href="#projects" title="projects">
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
