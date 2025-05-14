import Button from "../../../components/button/Button";
import classes from "./hero.module.css";

function Hero() {
  return (
    <article className={classes["hero"]}>
      <header className={classes["article-header"]}>
        <h1 className={classes["title"]}>BAYRAM</h1>
      </header>

      <p className={classes["about-me"]}>
        I am Bayram and a perspective front-end dev. I am 20 years of age. I
        studied finance in college and graduated from college as a financier.
        but i never worked as one. I am a fast learner and adapt a new
        environment also. i have no work experience but have many pet-projects
      </p>

      <div className={classes["nav-buttons"]}>
        <Button color={"white"}>Projects</Button>
        <Button color={"black"}>Contacts</Button>
      </div>
    </article>
  );
}

export { Hero as default };
