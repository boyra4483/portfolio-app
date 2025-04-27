import { useState } from "react";
import Button from "../../../../components/button/Button";
import classes from "./contactForm.module.css";

function ContactForm() {
  const [result, setResult] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35418066-5a76-4d8b-9444-511e467caeac");
    setResult("Sending....");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={classes["contact-form"]}>
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
        <Button color={"black"}>Submit</Button>
      </form>
      <span>{result}</span>
    </>
  );
}

export { ContactForm as default };
