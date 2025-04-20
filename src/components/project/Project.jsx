import githubIcon from "../../assets/icons/github-link-icon.svg";
import liveLinkIcon from "../../assets/icons/live-link-icon.svg";
import classes from "./project.module.css";

function Project({ imgSrc, title, stack, projectLinks, children }) {
  const techStackItems = stack.map((item, id) => {
    <li key={id}>{item}</li>;
  });

  return (
    <article className={classes["project"]}>
      <img src={imgSrc} alt="screenshot of wordle project" />
      <h3 className={classes["project-title"]}>{title}</h3>

      <p className={classes["project-description"]}>{children}</p>
      <ul className={classes["tech-stack"]}>{techStackItems}</ul>

      <ul className={classes["project-links"]}>
        <li>
          <a href={projectLinks[0]} target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
        </li>

        <li>
          <a href={projectLinks[1]} target="_blank">
            <img src={liveLinkIcon} alt="live link icon" />
          </a>
        </li>
      </ul>
    </article>
  );
}

export { Project as default };
