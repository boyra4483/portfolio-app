import classes from "./title.module.css";

function Title({ styles, hlevel, children }) {
  const { marginBottom, ...rest } = styles;

  return (
    <header style={{ marginBottom }} className={classes["article-header"]}>
      {hlevel == 1 ? (
        <h1 style={rest} className={classes["title"]}>
          {children}
        </h1>
      ) : (
        <h2 style={rest} className={classes["title"]}>
          {children}
        </h2>
      )}
    </header>
  );
}

export { Title as default };
