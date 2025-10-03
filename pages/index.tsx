import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {

  const posts = [
    {
      id: 1,
      title: "My First Post",
      content: "This is my very first blog post where I introduce myself and my journey 🚀",
      image: "/post1.jpg",
    },
    {
      id: 2,
      title: "Learning Next.js",
      content: "I’m learning Next.js and exploring file-based routing, image optimization, and more.",
      image: "/post2.jpg",
    },
    {
      id: 3,
      title: "Why I like Web Dev",
      content: "I enjoy web development because it’s creative, challenging, and rewarding ✨",
      image: "/post3.jpg",
    },
  ];

  return (
    <div>
       <Head>
        <title>Home | My Blogs</title>
        <meta name="description" content="Welcome to my Next.js site where I share blogs and projects." />
        <meta name="keywords" content="Next.js, Blog, React, TypeScript" />
        <meta name="author" content="Your Name" />
      </Head>
      {/* ✅ Hero Section */}
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome to My Website 🚀</h1>
        <p>This is the Home Page built with Next.js + TypeScript.</p>
      </main>

      {/* ✅ Blog Section */}
      <section style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Latest Blog Posts
        </h2>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                width: "300px",
                background: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={280}
                height={180}
                style={{ borderRadius: "6px", objectFit: "cover" }}
              />
              <h3 style={{ margin: "1rem 0 0.5rem" }}>{post.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                {post.content.substring(0, 60)}...
              </p>
              <Link href={`/blog/${post.id}`} style={{ color: "#2a4d9c" }}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
