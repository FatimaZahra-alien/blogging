import { FormEvent } from "react";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Form submitted ✅ (but no backend yet!)");
  };

  return (
    <div className={styles.container}>
       <Head>
        <title>Contact Me | My Next App</title>
        <meta
          name="description"
          content="Get in touch with me for collaborations, web development projects, or just to say hi!"
        />
        <meta name="keywords" content="Contact, Email, Web Developer, Collaboration" />
        <meta name="author" content="Your Name" />
      </Head>

      <h1 className={styles.title}>Contact Me</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows={5} placeholder="Write your message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
