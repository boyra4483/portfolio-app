import wordlePng from "../../../assets/pet-project-images/wordle.png";
import githubIcon from "../../../assets/icons/github-link-icon.svg";
import liveLinkIcon from "../../../assets/icons/live-link-icon.svg";
import classes from "./projects.module.css";

function Projects() {
  return (
    <article className={classes["projects"]}>
      <header className={classes["article-header"]}>
        <h2 className={classes["title"]}>Projects</h2>
      </header>
      <section className={classes["filterPanelContainer"]}>
        <ul className={classes["filterPanel"]}>
          <li>ALL</li>
          <li>HTML+CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT+JS</li>
        </ul>
      </section>
      <div className={classes["pet-projects"]}>
        <article className={classes["project"]}>
          <img src={wordlePng} alt="screenshot of wordle project" />
          <h3 className={classes["project-title"]}>wordle</h3>
          <p className={classes["project-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sunt
            tempore maiores perferendis quasi veniam deleniti quos quisquam
            possimus inventore quam ipsum nihil hic, officia voluptate, cum
            similique illo? Velit!
          </p>
          <ul className={classes["tech-stack"]}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JSX</li>
            <li>REACT</li>
            <li>AXIOS</li>
          </ul>
          <ul className={classes["project-links"]}>
            <li>
              <a href="https://github.com/boyra4483/wordle" target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://boyra4483.github.io/wordle/" target="_blank">
                <img src={liveLinkIcon} alt="live link icon" />
              </a>
            </li>
          </ul>
        </article>
        <article className={classes["project"]}>
          <img src={wordlePng} alt="screenshot of wordle project" />
          <h3 className={classes["project-title"]}>wordle</h3>
          <p className={classes["project-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sunt
            tempore maiores perferendis quasi veniam deleniti quos quisquam
            possimus inventore quam ipsum nihil hic, officia voluptate, cum
            similique illo? Velit!
          </p>
          <ul className={classes["tech-stack"]}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JSX</li>
            <li>REACT</li>
            <li>AXIOS</li>
          </ul>
          <ul className={classes["project-links"]}>
            <li>
              <a href="https://github.com/boyra4483/wordle" target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://boyra4483.github.io/wordle/" target="_blank">
                <img src={liveLinkIcon} alt="live link icon" />
              </a>
            </li>
          </ul>
        </article>
        <article className={classes["project"]}>
          <img src={wordlePng} alt="screenshot of wordle project" />
          <h3 className={classes["project-title"]}>wordle</h3>
          <p className={classes["project-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sunt
            tempore maiores perferendis quasi veniam deleniti quos quisquam
            possimus inventore quam ipsum nihil hic, officia voluptate, cum
            similique illo? Velit!
          </p>
          <ul className={classes["tech-stack"]}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JSX</li>
            <li>REACT</li>
            <li>AXIOS</li>
          </ul>
          <ul className={classes["project-links"]}>
            <li>
              <a href="https://github.com/boyra4483/wordle" target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://boyra4483.github.io/wordle/" target="_blank">
                <img src={liveLinkIcon} alt="live link icon" />
              </a>
            </li>
          </ul>
        </article>
        <article className={classes["project"]}>
          <img src={wordlePng} alt="screenshot of wordle project" />
          <h3 className={classes["project-title"]}>wordle</h3>
          <p className={classes["project-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sunt
            tempore maiores perferendis quasi veniam deleniti quos quisquam
            possimus inventore quam ipsum nihil hic, officia voluptate, cum
            similique illo? Velit!
          </p>
          <ul className={classes["tech-stack"]}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JSX</li>
            <li>REACT</li>
            <li>AXIOS</li>
          </ul>
          <ul className={classes["project-links"]}>
            <li>
              <a href="https://github.com/boyra4483/wordle" target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://boyra4483.github.io/wordle/" target="_blank">
                <img src={liveLinkIcon} alt="live link icon" />
              </a>
            </li>
          </ul>
        </article>
      </div>
    </article>
  );
}

export { Projects as default };
