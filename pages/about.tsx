import Image from "next/image";
import styles from "../styles/about.module.css";
import Head from "next/head";

export default function About() {
  return (
    <div className={styles.container}>
       <Head>
        <title>About Me | My Next App</title>
        <meta
          name="description"
          content="Learn more about me, my journey in web development, and my goals with Next.js, React, and TypeScript."
        />
        <meta name="keywords" content="About, Web Developer, Next.js, React, TypeScript" />
        <meta name="author" content="Your Name" />
      </Head>
      {/* Left: Text */}
      <div className={styles.textSection}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.text}>
          Hi, I’m Alien (Fatima)👋. I’m currently learning Next.js and exploring web
          development. I enjoy creating clean and user-friendly interfaces, and I
          love to see my ideas come to life in the browser.
        </p>
        <p className={styles.text}>
          My goal is to become confident in modern web technologies like React,
          Next.js, and TypeScript, while also building real-world projects that
          solve problems. 🚀
        </p>
      </div>

      {/* Right: Image */}
      <div className={styles.imageSection}>
        <Image
          src="/logo.jpg"
          alt="My Photo"
          width={250}
          height={250}
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}


