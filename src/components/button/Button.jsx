import classes from "./button.module.css";

function Button({ onClick, color, children }) {
  const BtnClass = color == "black" ? "blackBtn" : "whiteBtn";
  return (
    <a
      onClick={onClick}
      href="#contacts"
      title="contacts"
      className={`${classes["button"]} ${classes[BtnClass]}`}
    >
      {children}
    </a>
  );
}

export { Button as default };
