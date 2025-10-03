import { useRouter } from "next/router";
import Image from "next/image";
import { posts } from "../../data/posts"; // import same posts data

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h1 style={{ padding: "2rem", textAlign: "center" }}>Post not found 🚫</h1>;
  }

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>{post.title}</h1>

      <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
        <Image
          src={post.image}
          alt={post.title}
          width={700}
          height={400}
          style={{
            borderRadius: "10px",
            marginBottom: "1rem",
            objectFit: "cover",
            width: "100%", // ✅ makes it responsive
            height: "auto",
          }}
        />
      </div>

      <p
        style={{
          lineHeight: "1.6",
          fontSize: "1.1rem",
          marginTop: "1rem",
          textAlign: "justify",
        }}
      >
        {post.content}
      </p>
    </div>
  );
}
