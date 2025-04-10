import Header from "./header/Header";
import Hero from "./hero/Hero";
import AboutMe from "./about-me/AboutMe";
import classes from "./index.module.css";

function Home() {
  return (
    <>
      <Header />
      <main className={classes["main"]}>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export { Home as default };
