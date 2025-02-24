import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  '1': {
    id: '1',
    title: '修行之路的開始',
    content: `在這個快節奏的現代社會中，我們常常忘記了最重要的是什麼。修行不僅僅是一種宗教行為，更是一種生活態度，一種對生命的探索和理解。

通過日常的修行，我們可以：
1. 培養正念意識
2. 提升心靈品質
3. 找到內心的平靜
4. 建立更好的人際關係

修行之路沒有捷徑，需要持之以恆的練習和耐心。每一個當下都是修行的機會，讓我們一起在這條路上互相鼓勵和支持。`,
    date: '2024-02-24'
  },
  '2': {
    id: '2',
    title: '冥想的力量',
    content: `冥想是一種古老而有效的修行方法，它能幫助我們：
    
1. 放鬆身心
2. 提高專注力
3. 減輕壓力
4. 增強自我覺察

通過規律的冥想練習，我們可以逐漸體會到內心的寧靜，看清自己的本質。這不是一蹴而就的過程，需要我們保持耐心和恆心。

讓我們一起探索冥想的奧秘，找到屬於自己的內心平靜。`,
    date: '2024-02-23'
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-center text-xl">文章不存在</p>
        <div className="text-center mt-4">
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            返回文章列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-8">{post.date}</div>
        <div className="whitespace-pre-wrap">{post.content}</div>
      </article>
      <div className="mt-8 text-center">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          返回文章列表
        </Link>
      </div>
    </div>
  );
};

export default BlogPost; 