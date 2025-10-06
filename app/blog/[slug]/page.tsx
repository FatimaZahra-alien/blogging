export default async function SingleBlog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 📝 Static blog data
  const blogs: Record<string, { title: string; content: string }> = {
    "my-first-blog-post": {
      title: "My First Blog Post",
      content: `
      <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
        <p>Hey there! 👋 Welcome to my very first blog post on <b>Debugging Life</b>. I’ve been thinking about starting this blog for quite some time, and finally, I decided to stop overthinking and just begin. The idea of this space is simple: to share my journey as a developer, the challenges I face, the lessons I learn, and the little victories that keep me going.</p>

        <p>Whether you’re just starting out in coding, or you’re an experienced developer who enjoys revisiting the basics, I hope you’ll find something here that resonates with you.</p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Why I Started This Blog</h2>
        <p>When I first started coding, I struggled a lot with tutorials that were either too advanced or too shallow. I often felt like I was missing the “in-between” knowledge — the small tips, the subtle mistakes, and the real-world debugging stories that make a developer stronger.</p>

        <p>That’s why I decided to create this blog. I wanted a place where I could:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Document what I learn in web development</li>
          <li>Share debugging tips that save time and frustration</li>
          <li>Write about <b>Next.js</b>, <b>React</b>, and <b>Tailwind CSS</b> as I experiment with them</li>
          <li>Reflect on my own journey as a developer (with all the ups and downs)</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What You Can Expect</h2>
        <p>This blog won’t just be about technical tutorials. Instead, I want it to be a mix of:</p>
        <ul class="list-disc pl-6 mb-4">
          <li><b>Practical Guides</b> – Things I learn while building projects, explained step by step.</li>
          <li><b>Debugging Stories</b> – Sharing bugs I encounter and how I solved them.</li>
          <li><b>Developer Life</b> – Thoughts on productivity, impostor syndrome, learning habits, and work-life balance.</li>
          <li><b>Design Tips for Developers</b> – Because even if you’re not a designer, your websites can still look polished.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">My First Steps as a Developer</h2>
        <p>Like many beginners, I started out feeling completely lost. HTML and CSS felt intimidating, and JavaScript seemed like a foreign language. But little by little, project by project, things began to click.</p>

        <p>I still remember the first time I got a simple “Hello, World!” running on my screen—it was such a small program, but it gave me the biggest thrill. From there, I moved on to building small web pages, experimenting with styling, and eventually diving into frameworks like <b>React</b> and <b>Next.js</b>.</p>

        <p>And here’s the truth: even now, I still get stuck all the time. The difference is, now I know that struggling is part of the process. Every bug, every error message, every failed attempt is actually progress.</p>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Lessons I’ve Learned So Far</h2>
        <ul class="list-disc pl-6 mb-4">
          <li><b>Consistency beats motivation.</b> Coding every day, even for 20 minutes, is better than waiting for “the perfect time.”</li>
          <li><b>Google is your best friend.</b> Every developer, no matter how senior, looks things up constantly.</li>
          <li><b>Break big problems into smaller steps.</b> Debugging feels easier when you tackle one issue at a time.</li>
          <li><b>Don’t be afraid to make mistakes.</b> They are literally how you learn.</li>
          <li><b>Celebrate small wins.</b> Every bug you fix, every project you complete, every new thing you learn is worth celebrating.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">What’s Next?</h2>
        <p>This blog is just getting started. In the coming weeks, I’ll be sharing:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>A beginner-friendly guide to setting up a <b>Next.js</b> project</li>
          <li>Common debugging mistakes I made (and how you can avoid them)</li>
          <li>How I use <b>Tailwind CSS</b> to design clean websites quickly</li>
          <li>Reflections on balancing coding with everyday life</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Final Thoughts</h2>
        <p>Starting this blog feels a little like starting my coding journey all over again—exciting, scary, and full of unknowns. But if there’s one thing coding has taught me, it’s that you learn by doing.</p>

        <p>So, here I am, doing. 💻✨</p>

        <p>Thanks for reading my first post! If you made it this far, I’d love to hear from you — what challenges are you facing in your own coding journey? Let’s debug life together. 💙</p>
      `,
    },
   "exploring-nextjs": {
  title: "Exploring Next.js",
  content: `
    <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
    <p><b>Next.js</b> is one of the most powerful frameworks for building modern, fast, and SEO-friendly web applications using React. If you’ve been using plain React, you’ll love how much easier Next.js makes things like routing, server-side rendering, and deployment.</p>

    <p>In this post, I’ll walk you through why Next.js is a game-changer, how it differs from React, and what makes it one of the most popular frameworks in the web development world today.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Why Developers Love Next.js</h2>
    <p>Next.js offers a set of features that make web development faster, cleaner, and more efficient. Here are some of the reasons it stands out:</p>

    <ul class="list-disc pl-6 mb-4">
      <li><b>File-based Routing:</b> No need to configure React Router. Each file in your <code>/app</code> or <code>/pages</code> folder becomes a route automatically.</li>
      <li><b>Server-Side Rendering (SSR):</b> Your pages load with content already rendered from the server, improving SEO and speed.</li>
      <li><b>Static Site Generation (SSG):</b> Build your pages once, then serve them instantly like a static site — perfect for blogs or portfolios.</li>
      <li><b>API Routes:</b> You can create backend APIs right inside your Next.js app, without needing a separate server.</li>
      <li><b>Built-in Image Optimization:</b> Next.js automatically optimizes your images for different screen sizes and devices.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Setting Up a New Next.js Project</h2>
    <p>Starting a Next.js project is easier than ever. All you need is Node.js and npm or yarn installed. Run the following command in your terminal:</p>

    <pre class="bg-gray-100 text-sm p-3 rounded mb-4"><code>npx create-next-app@latest my-next-project</code></pre>

    <p>This command sets up everything — React, Next.js, ESLint, Tailwind (if you choose it), and all the basic structure you’ll need to get started quickly.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Understanding the Folder Structure</h2>
    <p>After creating your project, your file tree might look like this:</p>

    <pre class="bg-gray-100 text-sm p-3 rounded mb-4"><code>
my-next-project/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   └── images/
├── package.json
└── next.config.js
    </code></pre>

    <p>The <b>app</b> directory is where most of your pages and layouts live. Each file inside becomes a route automatically — no router setup needed!</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Client vs Server Components</h2>
    <p>One of the biggest updates in Next.js 13+ is the introduction of <b>React Server Components</b>. These allow you to render components on the server by default, improving performance and reducing JavaScript bundle size on the client side.</p>

    <ul class="list-disc pl-6 mb-4">
      <li><b>Server Components</b> handle data fetching and heavy logic.</li>
      <li><b>Client Components</b> are interactive and handle user input, forms, etc.</li>
    </ul>

    <p>This balance gives you the best of both worlds — fast loading times and smooth interactivity.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Deploying Your Next.js App</h2>
    <p>Deployment is one of the easiest parts of using Next.js. You can deploy directly to <b>Vercel</b> (the company behind Next.js) with a single command or by connecting your GitHub repo. Just push your project to GitHub and import it on Vercel — it will handle the rest automatically!</p>

    <p>Alternatively, you can deploy to platforms like <b>Netlify</b>, <b>Firebase Hosting</b>, or even your own server.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Final Thoughts</h2>
    <p>Next.js combines the power of React with the simplicity of static and server-side rendering. It’s perfect for everything from small portfolios to large-scale production apps.</p>

    <p>If you’ve been using React for a while and want to take your projects to the next level, <b>Next.js is the way to go</b>. Start small, explore its features one by one, and soon you’ll see why it’s loved by developers around the world.</p>

    <p>Stay tuned for my next post — I’ll walk you through building a complete Next.js blog with dynamic routes and Tailwind CSS styling. 🚀</p>
  `,
},

   "design-tips-for-developers": {
  title: "Design Tips for Developers",
  content: `
    <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
    <p>Not every developer is a designer — and that’s completely okay! 🎨  
    But with a few smart design practices, you can make your websites look modern, professional, and user-friendly — without needing deep design expertise.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">1. Focus on Consistency</h2>
    <p>Consistency is the secret to a clean and polished design. Use a limited color palette, repeat the same spacing, and align elements properly.  
    Consistent visuals make users feel comfortable and help your interface look cohesive.</p>

    <ul class="list-disc pl-6 mb-4">
      <li>Use a design system or a UI library like <b>Tailwind CSS</b> or <b>ShadCN</b>.</li>
      <li>Stick to a 4px or 8px spacing grid for padding and margins.</li>
      <li>Use similar border radius and shadow styles across cards, buttons, and inputs.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">2. Limit Your Color Palette</h2>
    <p>Using too many colors can make your UI feel cluttered. Instead, stick to <b>2–3 main colors</b> — one for your background, one for text, and one accent color for buttons or highlights.</p>

    <p>Tools like <a href="https://coolors.co/" target="_blank" class="text-blue-600 hover:underline">Coolors</a> and <a href="https://colorhunt.co/" target="_blank" class="text-blue-600 hover:underline">Color Hunt</a> can help you find harmonious color palettes easily.</p>

    <pre class="bg-gray-100 text-sm p-3 rounded mb-4"><code>
🎨 Example:
- Primary: #1E3A8A (Deep Blue)
- Secondary: #FACC15 (Golden)
- Background: #F9FAFB (Soft Gray)
    </code></pre>

    <h2 class="text-2xl font-semibold mt-8 mb-4">3. Typography Matters</h2>
    <p>Fonts have personality. Use readable and consistent typography. Don’t use more than two fonts — one for headings and one for body text.</p>

    <ul class="list-disc pl-6 mb-4">
      <li><b>Google Fonts</b> is your best friend — try <i>Poppins</i>, <i>Inter</i>, or <i>Open Sans</i>.</li>
      <li>Keep font sizes balanced — larger for titles, medium for subheadings, and readable for paragraphs.</li>
      <li>Ensure good line spacing (1.5x or more) for readability.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">4. Use Whitespace Wisely</h2>
    <p>Whitespace isn’t “empty space” — it’s breathing room for your content.  
    It helps separate elements, improve readability, and make your layout feel balanced.</p>

    <p>Avoid cramming everything together. The cleaner your layout, the more premium it feels.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">5. Visual Hierarchy is Key</h2>
    <p>Guide your user’s eyes. Use size, color, and spacing to show what’s important.  
    For example:</p>

    <ul class="list-disc pl-6 mb-4">
      <li>Headings should be bold and larger.</li>
      <li>Buttons should stand out with color and contrast.</li>
      <li>Important content should have more spacing around it.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">6. Use Icons and Images Thoughtfully</h2>
    <p>Icons and illustrations add personality — but overusing them can clutter the UI.  
    Keep them minimal, consistent in style, and relevant to your content.</p>

    <p>Free resources:  
    <a href="https://lucide.dev/icons/" target="_blank" class="text-blue-600 hover:underline">Lucide Icons</a>  
    <a href="https://undraw.co/illustrations" target="_blank" class="text-blue-600 hover:underline">Undraw Illustrations</a></p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">7. Test and Observe</h2>
    <p>Design isn’t just about aesthetics — it’s about <b>experience</b>.  
    Test your designs with real users or friends. See what feels confusing or out of place and adjust accordingly.</p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Final Thoughts</h2>
    <p>You don’t need to be a full-time designer to make beautiful apps. By following simple design principles — consistency, balance, and simplicity — you can create interfaces that both look and feel amazing.</p>

    <p><b>Design is not about adding more — it’s about making things clear, clean, and meaningful.</b> ✨</p>

    <p>Start small: tweak colors, adjust spacing, and experiment. You’ll be surprised how much of a difference it makes!</p>
  `,
},

  };

 const blog = blogs[slug];

  if (!blog) {
    return <div className="text-center py-20 text-gray-600">Blog not found 😢</div>;
  }

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
        <div
          className="text-gray-700 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}

