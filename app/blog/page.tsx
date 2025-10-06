import Image from "next/image";


export default function BlogPage() {
  const blogs = [
    {
      title: "My First Blog Post",
      description: "This is a short description of the first blog post.",
      image: "/post1.jpg",
      slug: "my-first-blog-post",
    },
    {
      title: "Exploring Next.js",
      description: "A beginner’s guide to building web apps with Next.js.",
      image: "/post2.jpg",
      slug: "exploring-nextjs",
    },
    {
      title: "Design Tips for Developers",
      description: "Make your websites look great even without a designer.",
      image: "/post3.jpg",
      slug: "design-tips-for-developers",
    },
  ];

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          All Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
