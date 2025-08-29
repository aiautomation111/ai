'use client'
import React, { useState } from 'react';

// --- أيقونات SVG بسيطة ---
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


// --- بيانات المدونة الوهمية ---
const blogPosts = [
  {
    id: 1,
    title: "مستقبل تطوير الويب باستخدام React",
    excerpt: "استكشف أحدث الاتجاهات والميزات في React وكيف تشكل مستقبل تطبيقات الويب التفاعلية.",
    author: "أحمد علي",
    date: "15 أغسطس 2024",
    imageUrl: "https://placehold.co/600x400/000000/FFFF00?text=React",
    content: `
      <p>أحدث React ثورة في طريقة بناء واجهات المستخدم. بفضل نموذجه القائم على المكونات وتدفق البيانات أحادي الاتجاه، أصبح تطوير تطبيقات معقدة أسهل من أي وقت مضى.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3 text-white">الميزات الرئيسية في React 19</h3>
      <p>يقدم React 19 ميزات مثل الـ 'Hooks' التي تسمح باستخدام الحالة والميزات الأخرى لـ React بدون كتابة 'class'. هذا يجعل الكود أكثر قابلية للقراءة وأسهل في الصيانة.</p>
      <ul class="list-disc list-inside mt-4 space-y-2 text-gray-300">
        <li>useState: لإدارة الحالة المحلية.</li>
        <li>useEffect: للتعامل مع الآثار الجانبية.</li>
        <li>useContext: لمشاركة الحالة عبر المكونات.</li>
      </ul>
      <blockquote class="border-l-4 border-yellow-400 pl-4 py-2 my-6 text-gray-400 italic">
        "القدرة على إنشاء مكونات قابلة لإعادة الاستخدام هي واحدة من أقوى ميزات React."
      </blockquote>
      <p>مع استمرار تطور النظام البيئي، يمكننا أن نتوقع رؤية أدوات ومكتبات أكثر قوة مبنية حول React، مما يجعله خيارًا رئيسيًا للمطورين في جميع أنحاء العالم.</p>
    `
  },
  {
    id: 2,
    title: "دليل تصميم واجهة المستخدم الداكنة",
    excerpt: "تعلم مبادئ إنشاء واجهات مستخدم داكنة جميلة وسهلة الاستخدام تجذب المستخدمين.",
    author: "فاطمة محمد",
    date: "10 أغسطس 2024",
    imageUrl: "https://placehold.co/600x400/1A1A1A/FFFFFF?text=UI+Design",
    content: "<p>المحتوى الكامل لمدونة تصميم الواجهة الداكنة يذهب هنا...</p>"
  },
  {
    id: 3,
    title: "لماذا Tailwind CSS يغير قواعد اللعبة",
    excerpt: "نظرة عميقة على إطار العمل CSS القائم على الأدوات المساعدة وكيف يسرع عملية التطوير.",
    author: "خالد عبدالله",
    date: "5 أغسطس 2024",
    imageUrl: "https://placehold.co/600x400/000000/38BDF8?text=Tailwind",
    content: "<p>المحتوى الكامل لمدونة Tailwind CSS يذهب هنا...</p>"
  }
];

// === مكون بطاقة المدونة (للاستخدام في صفحة القائمة) ===
const BlogPostCard = ({ post, onViewPost }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/111/FFF?text=Image+Error'; }}/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
        <div className="text-sm text-gray-500 flex items-center justify-between mb-4">
            <span className="flex items-center"><UserIcon /> {post.author}</span>
            <span className="flex items-center"><CalendarIcon /> {post.date}</span>
        </div>
        <button onClick={() => onViewPost(post.id)} className="text-yellow-400 font-semibold hover:underline self-start">
          اقرأ المزيد &larr;
        </button>
      </div>
    </div>
  );
};


// === مكون صفحة قائمة المدونات ===
const BlogListPage = ({ onViewPost }) => {
  return (
    <div className="bg-black text-white py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        {/* === قسم العنوان === */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">مدونتنا</h1>
          <p className="text-gray-300 text-lg">
            أحدث المقالات والأفكار من فريقنا. استكشف مواضيع حول التكنولوجيا والتصميم والتطوير.
          </p>
        </section>

        {/* === شبكة المدونات === */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} onViewPost={onViewPost} />
          ))}
        </section>
      </div>
    </div>
  );
};


// === مكون صفحة المدونة الواحدة ===
const BlogPostPage = ({ postId, onBack }) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">لم يتم العثور على المدونة</h2>
        <button onClick={onBack} className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded-lg hover:bg-yellow-500 transition-colors flex items-center">
            <ArrowLeftIcon />
            العودة إلى المدونة
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
            {/* === زر الرجوع === */}
            <button onClick={onBack} className="bg-gray-800 text-white font-semibold py-2 px-5 mb-8 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
                <ArrowLeftIcon />
                العودة إلى كل المقالات
            </button>

          {/* === رأس المدونة === */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">{post.title}</h1>
            <div className="text-md text-gray-400 flex items-center space-x-4 rtl:space-x-reverse">
              <span className="flex items-center"><UserIcon /> {post.author}</span>
              <span>&bull;</span>
              <span className="flex items-center"><CalendarIcon /> {post.date}</span>
            </div>
          </header>

          {/* === الصورة الرئيسية === */}
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 border border-gray-800" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x600/111/FFF?text=Image+Error'; }}/>

          {/* === محتوى المدونة === */}
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


// === مكون اتصل بنا (من طلبك الأصلي) ===
const ContactUsPage = () => {
    // ... الكود الخاص بصفحة اتصل بنا يوضع هنا ...
    return (
        <div className="bg-black text-white py-20 px-4 sm:px-8">
            <div className="container mx-auto space-y-24">
                <section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">لنتحدث عن مشروعك</h1>
                    <p className="text-gray-300 text-lg">
                        سواء كان لديك سؤال، فكرة مشروع، أو ترغب فقط في معرفة المزيد، نحن هنا للاستماع. املأ النموذج أدناه أو استخدم إحدى طرق الاتصال المباشرة.
                    </p>
                </section>
                {/* ... بقية كود صفحة اتصل بنا ... */}
            </div>
        </div>
    );
};


// === المكون الرئيسي للتطبيق (للتبديل بين الصفحات) ===
export default function App() {
  const [currentPage, setCurrentPage] = useState('blogList'); // 'blogList', 'blogPost', 'contact'
  const [currentPostId, setCurrentPostId] = useState(null);

  const handleViewPost = (id) => {
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
        return <BlogPostPage postId={currentPostId} onBack={handleBackToBlog} />;
      case 'contact':
        return <ContactUsPage />;
      case 'blogList':
      default:
        return <BlogListPage onViewPost={handleViewPost} />;
    }
  };

  return (
    <div>
        {/* --- شريط التنقل --- */}
        <nav className="bg-[#1A1A1A] p-4 border-b border-gray-800 sticky top-0 z-10">
            <div className="container mx-auto flex justify-center items-center gap-6">
                <button onClick={() => setCurrentPage('blogList')} className={`font-semibold ${currentPage.startsWith('blog') ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400 transition-colors`}>المدونة</button>
                <button onClick={() => setCurrentPage('contact')} className={`font-semibold ${currentPage === 'contact' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400 transition-colors`}>اتصل بنا</button>
            </div>
        </nav>
        
        {/* --- عرض الصفحة الحالية --- */}
        <main>
            {renderPage()}
        </main>
    </div>
  );
}
