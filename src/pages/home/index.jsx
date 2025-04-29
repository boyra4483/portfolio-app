import { ArticlesRefProvider } from "../../contexts/ref-context/RefContext";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import AboutMe from "./about-me/AboutMe";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import classes from "./index.module.css";

function Home() {
  return (
    <ArticlesRefProvider>
      <Header />
      <main className={classes["main"]}>
        <Hero />
        <AboutMe />
        <Projects />
        <Contacts />
        <p className={classes["gratitude"]}>
          thank{" "}
          <a
            href="https://www.figma.com/community/file/1276573947309032643/junior-developer-portfolio-template"
            target="_blank"
          >
            Aman Singh Bhogal
          </a>{" "}
          so much for free template
        </p>
      </main>
    </ArticlesRefProvider>
  );
}

export { Home as default };
