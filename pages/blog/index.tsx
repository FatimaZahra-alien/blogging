import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    description: "This is the first blog post description.",
    image: "/post1.jpg",
  },
  {
    id: 2,
    title: "Second Blog Post",
    description: "This is the second blog post description.",
    image: "/post2.jpg",
  },
  {
    id: 3,
    title: "Third Blog Post",
    description: "This is the third blog post description.",
    image: "/post3.jpg",
  },
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Blogs</h1>
      <div className={styles.cards}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className={styles.image}
            />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/blog/${post.id}`} className={styles.link}>
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
