import Button from "../../../components/button/Button";
import classes from "./hero.module.css";

function Hero() {
  return (
    <article className={classes["hero"]}>
      <header className={classes["article-header"]}>
        <h1 className={classes["title"]}>BOYRA</h1>
      </header>
      <p className={classes["about-me"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
        urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non
        justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
        (About me in short)
      </p>
      <div className={classes["nav-buttons"]}>
        <Button color={"white"}>Projects</Button>
        <Button color={"black"}>Contacts</Button>
      </div>
    </article>
  );
}

export { Hero as default };
