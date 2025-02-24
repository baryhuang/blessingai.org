import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'AI短片制作基础',
    summary: '踏上修行之路的初心與體悟',
    date: '2024-02-24'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">部落格分享</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/blog/${post.id}.html`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <div className="text-sm text-gray-500">{post.date}</div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 