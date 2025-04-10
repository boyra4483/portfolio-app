import classes from "./aboutMe.module.css";

function AboutMe() {
  return (
    <article className={classes["about-me"]}>
      <header className={classes["article-header"]}>
        <h2 className={classes["title"]}>About me</h2>
      </header>

      <p className={classes["tech-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
        urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non
        justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
      </p>

      <ul className={classes["tech-stack"]}>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>JSX</li>
        <li>REACT</li>
        <li>GIT</li>
      </ul>
    </article>
  );
}

export { AboutMe as default };
