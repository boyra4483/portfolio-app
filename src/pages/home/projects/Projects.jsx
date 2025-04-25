import Project from "../../../components/project/Project";
import FilterPanel from "../../../components/filter-panel/FilterPanel";
import { useArticlesRef } from "../../../contexts/ref-context/RefContext";
import classes from "./projects.module.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Projects() {
  const [category, setCategory] = useState("all");
  const projectData = useLoaderData();

  const articlesRef = useArticlesRef();
  const categoryProjects = projectData[category].map((project) => {
    return (
      <Project
        key={project.id}
        imgSrc={project.img}
        title={project.name}
        stack={project.techStack}
        projectLinks={project.links}
      >
        {project.description}
      </Project>
    );
  });

  function refCallBack(node) {
    articlesRef.current.set("projects", node);
    return () => {
      articlesRef.current.delete("projects");
    };
  }
  function handleChangeCategory(e) {
    if (e.target.nodeName != "LI") return;
    const nextCategory = e.target.textContent
      .toLowerCase()
      .replaceAll("+", " ")
      .replaceAll("reactjs", "reactJs");

    setCategory(nextCategory);
  }

  return (
    <article ref={refCallBack} className={classes["projects"]}>
      <header className={classes["article-header"]}>
        <h2 className={classes["title"]}>Projects</h2>
      </header>
      <FilterPanel onChangeCategory={handleChangeCategory} />
      <div className={classes["pet-projects"]}>{categoryProjects}</div>
    </article>
  );
}

export { Projects as default };
