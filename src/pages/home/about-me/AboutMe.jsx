import { useArticlesRef } from "../../../contexts/ref-context/RefContext";
import classes from "./aboutMe.module.css";

function AboutMe() {
  const articlesRef = useArticlesRef();

  function refCallBack(node) {
    articlesRef.current.set("about me", node);
    return () => {
      articlesRef.current.delete("about me");
    };
  }
  return (
    <article ref={refCallBack} className={classes["about-me"]}>
      <header className={classes["article-header"]}>
        <h2 className={classes["title"]}>About me</h2>
      </header>

      <p className={classes["tech-text"]}>
        I've been in IT for about 2 years and I'm still learning. I've finished
        reading react documentation and am starting to learn TS. I plan to
        expand my stack with things like nextJs, HTTP, etc.
      </p>

      <ul className={classes["tech-stack"]}>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>JS</li>
        <li>TS</li>
        <li>JSX</li>
        <li>REACT</li>
        <li>REACT-ROUTER-DOM</li>
        <li>GIT</li>
      </ul>
    </article>
  );
}

export { AboutMe as default };
