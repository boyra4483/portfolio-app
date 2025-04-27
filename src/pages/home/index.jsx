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
      </main>
    </ArticlesRefProvider>
  );
}

export { Home as default };
