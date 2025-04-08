import classes from "./title.module.css";

function Title({ margin, children }) {
  return (
    <header style={margin} className={classes["article-header"]}>
      <h1 className={classes["title"]}>{children}</h1>
    </header>
  );
}

export { Title as default };
