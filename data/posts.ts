// data/posts.ts
export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "My First Post",
    content:
      "Welcome to my very first blog! This is where I introduce myself and share my journey in web development. 🚀",
    image: "/post1.jpg",
  },
  {
    id: 2,
    title: "Learning Next.js",
    content:
      "Next.js is an amazing framework built on top of React. I’m learning file routing, layouts, and more!",
    image: "/post2.jpg",
  },
  {
    id: 3,
    title: "Why I Like Web Dev",
    content:
      "Web development is exciting because I can turn ideas into reality and build projects that solve problems.",
    image: "/post3.jpg",
  },
];
