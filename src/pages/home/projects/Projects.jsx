import Project from "../../../components/project/Project";
import { useArticlesRef } from "../../../contexts/ref-context/RefContext";
import wordleImg from "../../../assets/pet-project-images/wordle.jpg";
import todoImg from "../../../assets/pet-project-images/to-do.jpg";
import calculatorImg from "../../../assets/pet-project-images/calculator.jpg";
import weatherImg from "../../../assets/pet-project-images/weather.jpg";
import memoryCardGameImg from "../../../assets/pet-project-images/memory-card-game.jpg";
import classes from "./projects.module.css";

const projectData = {
  "html css": [],
  js: [],
  reactJs: [],
};
// console.log(crypto.randomUUID());

function Projects() {
  const articlesRef = useArticlesRef();

  function refCallBack(node) {
    articlesRef.current.set("projects", node);
    return () => {
      articlesRef.current.delete("projects");
    };
  }

  return (
    <article ref={refCallBack} className={classes["projects"]}>
      <header className={classes["article-header"]}>
        <h2 className={classes["title"]}>Projects</h2>
      </header>
      <section className={classes["filterPanelContainer"]}>
        <ul className={classes["filterPanel"]}>
          <li>ALL</li>
          <li>HTML+CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACTJS</li>
          <li>REACTJS+REACT-ROUTER</li>
        </ul>
      </section>
      <div className={classes["pet-projects"]}>
        <Project
          imgSrc={wordleImg}
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
          imgSrc={todoImg}
          title="to-do"
          stack={["HTML", "CSS", "JSX", "REACT"]}
          projectLinks={[
            "https://github.com/boyra4483/to-do-app",
            "https://boyra4483.github.io/to-do-app/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
        <Project
          imgSrc={weatherImg}
          title="weather-app"
          stack={["HTML", "CSS", "JSX", "REACT", "REACT-ROUTER"]}
          projectLinks={[
            "https://github.com/boyra4483/weather-app",
            "https://boyra4483.github.io/weather-app/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
        <Project
          imgSrc={calculatorImg}
          title="calculator"
          stack={["HTML", "CSS", "JSX", "REACT"]}
          projectLinks={[
            "https://github.com/boyra4483/calculator-app",
            "https://boyra4483.github.io/calculator-app/",
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
          optio quaerat tenetur cupiditate id ex eius et possimus modi! Officia
          ex dignissimos dolorum facere! Nihil minus provident sed dolorem.
        </Project>
        <Project
          imgSrc={memoryCardGameImg}
          title="memory card game"
          stack={["HTML", "CSS", "JS", "firebase"]}
          projectLinks={[
            "https://github.com/boyra4483/memory-card-game",
            "https://boyra4483.github.io/memory-card-game/",
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
