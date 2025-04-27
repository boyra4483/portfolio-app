import { useArticlesRef } from "../../contexts/ref-context/RefContext";
import classes from "./button.module.css";

function Button({ color, children }) {
  const articlesRef = useArticlesRef();
  const BtnClass = color == "black" ? "blackBtn" : "whiteBtn";

  const toSection = children == "Projects" ? "projects" : "contacts";
  function handleClick(e) {
    const article = articlesRef.current.get(e.target.title);
    article.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  let submitBtn;
  if (children == "Submit") {
    submitBtn = (
      <button
        style={{
          cursor: "pointer",
        }}
        type="submit"
        className={`${classes["button"]} ${classes[BtnClass]}`}
      >
        {children}
      </button>
    );
  }

  return submitBtn ? (
    submitBtn
  ) : (
    <a
      onClick={handleClick}
      href={`#${toSection}`}
      title={toSection}
      className={`${classes["button"]} ${classes[BtnClass]}`}
    >
      {children}
    </a>
  );
}

export { Button as default };
