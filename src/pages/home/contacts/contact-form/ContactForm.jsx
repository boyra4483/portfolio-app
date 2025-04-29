import { useState } from "react";
import { useFetcher } from "react-router-dom";
import Button from "../../../../components/button/Button";
import classes from "./contactForm.module.css";

function ContactForm() {
  const [userData, setUserData] = useState({
    "user-name": "",
    "user-message": "",
    "user-email": "",
  });
  const fetcher = useFetcher();

  const formResponse = fetcher.data;
  const isUserDataReady = getDataStatus(userData);

  function handleChange(e) {
    const nextUserData = { ...userData, [e.target.name]: e.target.value };
    setUserData(nextUserData);
  }

  return (
    <>
      <fetcher.Form
        onChange={handleChange}
        method="POST"
        className={classes["contact-form"]}
      >
        <p className={classes["user-name"]}>
          <label htmlFor="name">Name</label>
          <input
            placeholder="John Doe"
            type="text"
            name="user-name"
            id="name"
            required
            className={classes["name-field"]}
          />
        </p>
        <p className={classes["user-message"]}>
          <label htmlFor="message">Your message</label>
          <textarea
            placeholder="Enter your message here"
            name="user-message"
            id="message"
            required
            className={classes["message-field"]}
          ></textarea>
        </p>
        <p className={classes["user-email"]}>
          <label htmlFor="email">Email Adress</label>
          <input
            placeholder="example@example.com"
            type="email"
            name="user-email"
            id="email"
            required
            className={classes["email-field"]}
          />
        </p>

        <span className={classes["requset-status"]}>
          {formResponse?.message}
        </span>

        {fetcher.state == "submitting" ? (
          <div className={classes["loader"]}></div>
        ) : (
          <Button disable={!isUserDataReady} color={"black"}>
            Submit
          </Button>
        )}
      </fetcher.Form>
    </>
  );
}

function getDataStatus(form) {
  return !Object.values(form)
    .map((value) => value.trim())
    .includes("");
}

export { ContactForm as default };
