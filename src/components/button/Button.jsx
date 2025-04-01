import classes from "./button.module.css";

function Button({ color, children }) {
  const BtnClass = color == "black" ? "blackBtn" : "whiteBtn";
  return (
    <a
      href="#"
      title="contacts"
      className={`${classes["button"]} ${classes[BtnClass]}`}
    >
      {children}
    </a>
  );
}

export { Button as default };
