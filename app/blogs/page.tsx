'use client'
import React, { useState } from 'react';

// ./app/blogs/page.tsx

interface Post {
  id:number;
  imageUrl: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

interface BlogListPageProps {
  onViewPost: (id: number) => void;
}

interface BlogPostPageProps {
  postId: number;
  onBack: () => void;
}
interface BlogPostCardProps {
  post: Post;
  onViewPost: (id: number) => void;
}

// --- Simple SVG Icons ---
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 inline-block">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 inline-block">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
    </svg>
);

// --- Dummy Blog Data ---
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development with React",
    excerpt: "Explore the latest trends and features in React and how they shape the future of interactive web applications.",
    author: "Ahmed Ali",
    date: "August 15, 2024",
    imageUrl: "https://placehold.co/600x400/000000/FFFF00?text=React",
    content: `
      <p>React revolutionized the way we build user interfaces. With its component-based model and one-way data flow, developing complex apps has become easier than ever.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3 text-white">Key Features in React 19</h3>
      <p>React 19 introduces features like 'Hooks' that allow using state and other React capabilities without writing 'class'. This makes the code more readable and easier to maintain.</p>
      <ul class="list-disc list-inside mt-4 space-y-2 text-gray-300">
        <li>useState: Manage local state.</li>
        <li>useEffect: Handle side effects.</li>
        <li>useContext: Share state across components.</li>
      </ul>
      <blockquote class="border-l-4 border-yellow-400 pl-4 py-2 my-6 text-gray-400 italic">
        "The ability to create reusable components is one of React's strongest features."
      </blockquote>
      <p>As the ecosystem evolves, we can expect to see more powerful tools and libraries built around React, making it a top choice for developers worldwide.</p>
    `
  },
  {
    id: 2,
    title: "Dark Mode UI Design Guide",
    excerpt: "Learn the principles of creating beautiful and user-friendly dark mode interfaces.",
    author: "Fatima Mohamed",
    date: "August 10, 2024",
    imageUrl: "https://placehold.co/600x400/1A1A1A/FFFFFF?text=UI+Design",
    content: "<p>Full content of the dark mode UI design blog goes here...</p>"
  },
  {
    id: 3,
    title: "Why Tailwind CSS is a Game Changer",
    excerpt: "A deep dive into the utility-first CSS framework and how it speeds up development.",
    author: "Khaled Abdullah",
    date: "August 5, 2024",
    imageUrl: "https://placehold.co/600x400/000000/38BDF8?text=Tailwind",
    content: "<p>Full content of the Tailwind CSS blog goes here...</p>"
  }
];

// === Blog Card Component ===
const BlogPostCard = ({ post, onViewPost }:BlogPostCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-300 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" onError={(e) => { 
        const target = e.target as HTMLImageElement;
        target.onerror = null; 
        target.src = 'https://placehold.co/600x400/111/FFF?text=Image+Error'; 
      }}/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-black">{post.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
        <div className="text-sm text-gray-500 flex items-center justify-between mb-4">
            <span className="flex items-center"><UserIcon /> {post.author}</span>
            <span className="flex items-center"><CalendarIcon /> {post.date}</span>
        </div>
        <button onClick={() => onViewPost(post.id)} className="text-yellow-400 cursor-pointer font-semibold hover:underline self-start">
          Read more &larr;
        </button>
      </div>
    </div>
  );
};

// === Blog List Page ===
const BlogListPage = ({ onViewPost }:BlogListPageProps) => {
  return (
    <div className="">
      <div className="container mx-auto">
        <section className="text-center mb-16 h-[88vh] w-full bg-black flex items-center justify-center flex-col gap-7">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-50">Our Blog</h1>
          <p className="text-gray-300 text-lg">
            Latest articles and insights from our team. Explore topics in technology, design, and development.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-[95%] md:w-[90%] mx-auto mb-10">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} onViewPost={onViewPost} />
          ))}
        </section>
      </div>
    </div>
  );
};

// === Single Blog Post Page ===
const BlogPostPage = ({ postId, onBack }:BlogPostPageProps) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="bg-white text-black h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Blog not found</h2>
        <button onClick={onBack} className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded-lg hover:bg-yellow-500 transition-colors flex items-center">
            <ArrowLeftIcon />
            Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
            <button onClick={onBack} className="bg-gray-800 text-white font-semibold py-2 px-5 mb-8 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                <ArrowLeftIcon />
                Back to all posts
            </button>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">{post.title}</h1>
            <div className="text-md text-gray-400 flex items-center space-x-4">
              <span className="flex items-center"><UserIcon /> {post.author}</span>
              <span>&bull;</span>
              <span className="flex items-center"><CalendarIcon /> {post.date}</span>
            </div>
          </header>

          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 border border-gray-800" onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/111/FFF?text=Image+Error';
          }}/>

          <article 
            className="prose prose-invert prose-lg max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          >
          </article>
        </div>
      </div>
    </div>
  );
};

// === Contact Us Page ===
const ContactUsPage = () => {
    return (
        <div className="bg-black text-white py-20 px-4 sm:px-8">
            <div className="container mx-auto space-y-24">
                <section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let’s Talk About Your Project</h1>
                    <p className="text-gray-300 text-lg">
                        Whether you have a question, a project idea, or just want to learn more, we’re here to listen. Fill out the form below or use one of the direct contact methods.
                    </p>
                </section>
            </div>
        </div>
    );
};

// === Main App Component ===
export default function App() {
  const [currentPage, setCurrentPage] = useState('blogList');
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);

  const handleViewPost = (id: number) => {
    setCurrentPostId(id);
    setCurrentPage('blogPost');
  };

  const handleBackToBlog = () => {
    setCurrentPage('blogList');
    setCurrentPostId(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'blogPost':
        if (currentPostId !== null) {
          return <BlogPostPage postId={currentPostId} onBack={handleBackToBlog} />;
        }
      case 'contact':
        return <ContactUsPage />;
      case 'blogList':
      default:
        return <BlogListPage onViewPost={handleViewPost} />;
    }
  };

  return (
    <div>
        <main>
            {renderPage()}
        </main>
    </div>
  );
}
