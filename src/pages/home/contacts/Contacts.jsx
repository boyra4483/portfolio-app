import { useArticlesRef } from "../../../contexts/ref-context/RefContext";
import ContactForm from "./contact-form/ContactForm";
import classes from "./contacts.module.css";

function Contacts() {
  const articlesRef = useArticlesRef();

  function refCallBack(node) {
    articlesRef.current.set("projects", node);
    return () => {
      articlesRef.current.delete("projects");
    };
  }

  return (
    <article ref={refCallBack} className={classes["contacts"]}>
      <header className={classes["article-header"]}>
        <h2 className={classes["title"]}>Contacts</h2>
      </header>
      <ContactForm />
    </article>
  );
}

export { Contacts as default };
