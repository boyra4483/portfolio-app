import { SectionsRefProvider } from "../../contexts/ref-context/RefContext";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import AboutMe from "./about-me/AboutMe";
import classes from "./index.module.css";

function Home() {
  return (
    <SectionsRefProvider>
      <Header />
      <main className={classes["main"]}>
        <Hero />
        <AboutMe />
      </main>
    </SectionsRefProvider>
  );
}

export { Home as default };
