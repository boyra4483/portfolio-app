import classes from "./filterPanel.module.css";

function FilterPanel({ onChangeCategory }) {
  return (
    <section className={classes["filterPanelContainer"]}>
      <ul onClick={onChangeCategory} className={classes["filterPanel"]}>
        <li>ALL</li>
        <li>HTML+CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACTJS</li>
        <li>REACTJS+REACT-ROUTER</li>
      </ul>
    </section>
  );
}

export { FilterPanel as default };
