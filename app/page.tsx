"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
{/* 🌄 Hero Section */}
<section
  className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
  style={{ backgroundImage: "url('/al.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* 🌐 Share Button — now top-right corner */}
  <button
    onClick={() => {
      if (navigator.share) {
        navigator.share({
          title: "Fatima's Blog",
          text: "Check out this amazing blog by Fatima!",
          url: window.location.href,
        });
      } else {
        alert("Sharing not supported on this browser 😢");
      }
    }}
    className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transition z-20"
  >
    <Share2 size={18} />
    Share
  </button>

  {/* Hero text */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
      Debugging Life
    </h1>
    <p className="text-lg md:text-xl font-light">
      Thoughts, tutorials, and stories by Fatima
    </p>
  </div>
</section>


     {/* ✍️ Blog Section */}
<section className="bg-white text-black pt-10 pb-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
      Latest Posts
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example blog cards */}
      {[
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
      ].map((post, index) => (
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
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* 👇 View All Button */}
    <div className="text-center mt-10">
      <a
        href="/blog"
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
      >
        View All Blogs →
      </a>
    </div>
  </div>
</section>

      {/* 👤 About Section */}
<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-900">
      About Me
    </h2>
   <p className="text-lg leading-relaxed text-gray-600 mb-8">
      Hey there 👋 I’m <span className="font-semibold text-blue-700">Fatima</span> — 
      a curious mind who loves blending creativity with code. I’m currently pursuing 
      my <strong>BS in Information Technology</strong>, and when I’m not debugging 
      software, I’m probably debugging life itself.
    </p>

    <p className="text-lg leading-relaxed text-gray-600 mb-8">
      This little corner of the internet, <em>FatimaWrites</em>, is where I pour my thoughts, 
      share lessons from tech and life, and document the things that inspire me — from 
      <strong>coding tutorials</strong> to <strong>art, sketches, and reflections</strong> 
      on personal growth. I believe creativity and logic aren’t opposites — they’re 
      teammates in the same story.
    </p>

    <p className="text-lg leading-relaxed text-gray-600 mb-8">
      I love exploring new frameworks (currently obsessed with <strong>Next.js</strong> 💻), 
      making small digital products, and occasionally getting lost in an 
      <strong>Urdu novel</strong> or painting something that matches my aesthetic mood.
    </p>

    <p className="text-lg leading-relaxed text-gray-600">
      Through this blog, I hope to connect with people who dream, build, and feel deeply — 
      people who believe in finding beauty in logic, and stories in code.  
      Thanks for stopping by — I’m truly glad you’re here. 🌙
    </p>

  </div>
</section>

    </div>
    
  );
}

