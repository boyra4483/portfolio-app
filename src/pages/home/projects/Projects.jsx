import Project from "../../../components/project/Project";
import wordlePng from "../../../assets/pet-project-images/wordle.png";
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
        <Project
          imgSrc={wordlePng}
          title="wordle"
          stack={["HTML", "CSS", "JSX", "REACT", "AXIOS"]}
          projectLinks={[
            "https://github.com/boyra4483/wordle",
            "https://boyra4483.github.io/wordle/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
        <Project
          imgSrc={wordlePng}
          title="wordle"
          stack={["HTML", "CSS", "JSX", "REACT", "AXIOS"]}
          projectLinks={[
            "https://github.com/boyra4483/wordle",
            "https://boyra4483.github.io/wordle/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
        <Project
          imgSrc={wordlePng}
          title="wordle"
          stack={["HTML", "CSS", "JSX", "REACT", "AXIOS"]}
          projectLinks={[
            "https://github.com/boyra4483/wordle",
            "https://boyra4483.github.io/wordle/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
        <Project
          imgSrc={wordlePng}
          title="wordle"
          stack={["HTML", "CSS", "JSX", "REACT", "AXIOS"]}
          projectLinks={[
            "https://github.com/boyra4483/wordle",
            "https://boyra4483.github.io/wordle/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
      </div>
    </article>
  );
}

export { Projects as default };
