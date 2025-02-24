import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Video,
  Image as ImageIcon,
  BookOpen,
  MessageCircle,
  Clock,
  Heart,
  ChevronRight,
  Send,
  Sparkles,
  X
} from 'lucide-react';
import Blog from './components/Blog';

const globalStyles = `
  @keyframes glow {
    0% {
      opacity: 0.8;
      text-shadow: 0 0 20px rgba(99, 179, 237, 0.4);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 40px rgba(99, 179, 237, 0.8),
                   0 0 80px rgba(99, 179, 237, 0.4);
    }
    100% {
      opacity: 0.8;
      text-shadow: 0 0 20px rgba(99, 179, 237, 0.4);
    }
  }
`;

function ToolCard({ 
  icon: Icon, 
  title, 
  description, 
  imageUrl,
  index 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative w-full sm:w-[240px] overflow-hidden rounded-xl transition-all duration-500 ease-out mb-4
        ${isHovered ? 'sm:scale-[1.02] sm:z-20' : 'sm:z-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `glow 3s ease-in-out ${index * 0.5}s infinite`,
        height: '120px sm:h-[160px]',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#01090F]/95 to-[#071B2A]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="relative z-20 p-4 h-full flex flex-col">
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-4 h-4 text-[#1F5C79]" />
            <h3 className="text-base font-bold text-white">{title}</h3>
          </div>
          
          <div className={`transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-xs text-gray-300 mb-2">{description}</p>
            <button className="inline-flex items-center text-white hover:gap-1 transition-all group text-xs">
              <span className="group-hover:text-[#1F5C79] transition-colors">立即使用</span>
              <ChevronRight className="w-3 h-3 group-hover:text-[#1F5C79] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CenterInput() {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full sm:w-[500px] px-4 sm:px-0">
      <div className={`
        relative transition-all duration-500 ease-out
        ${isExpanded ? 'sm:scale-110' : ''}
      `}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F5C79]/20 to-[#071B2A]/20 rounded-2xl blur-xl" />
        <div className="relative bg-gradient-to-r from-[#01090F]/90 to-[#071B2A]/90 rounded-2xl border border-[#1F5C79]/20 backdrop-blur-sm p-6">
          <div className="flex items-center gap-2 text-[#1F5C79] text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F5C79] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F5C79]"></span>
            </span>
            智能化事工助手
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            告訴我您的需求
          </h2>
          
          <div className="relative"
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Sparkles className="w-5 h-5 text-[#1F5C79]" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="例如：我想為講道事工製作精華視頻..."
              className="w-full pl-12 pr-12 py-3 text-sm sm:text-base bg-black/40 text-white placeholder-gray-400 rounded-xl border border-[#1F5C79]/20 focus:outline-none focus:ring-2 focus:ring-[#1F5C79]/40 transition-all"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F5C79] hover:text-white transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-[#1F5C79]/10 text-[#1F5C79] border border-[#1F5C79]/20">
              製作主日講道精華
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-[#1F5C79]/10 text-[#1F5C79] border border-[#1F5C79]/20">
              生成查經材料
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-[#1F5C79]/10 text-[#1F5C79] border border-[#1F5C79]/20">
              整理敬拜歌單
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#01090F] to-[#071B2A] border-b border-[#1F5C79]/20">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="py-2 flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#1F5C79]" />
            <span>支持我們繼續開發更多智能化事工工具</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#donate"
              className="text-xs px-2 sm:px-3 py-1 rounded-full bg-[#1F5C79] text-white hover:bg-[#1F5C79]/80 transition-colors"
            >
              奉獻支持
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="static sm:absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#01090F] to-[#071B2A] border-t border-[#1F5C79]/20">
      <div className="container mx-auto px-4">
        <div className="py-3 sm:py-4 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a href="#about" className="text-xs sm:text-base text-gray-400 hover:text-[#1F5C79] transition-colors">關於我們</a>
            <a href="#guide" className="text-xs sm:text-base text-gray-400 hover:text-[#1F5C79] transition-colors">使用指南</a>
            <a href="#contact" className="text-xs sm:text-base text-gray-400 hover:text-[#1F5C79] transition-colors">聯絡我們</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-[#01090F] to-[#071B2A] border-b border-[#1F5C79]/20 py-3 sm:py-4">
      <style>{globalStyles}</style>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 sm:gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M16 4V28M9 16H23" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="2" fill="currentColor"/>
              <path d="M24 8L26 6M8 24L6 26M24 24L26 26M8 8L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xl sm:text-2xl font-bold text-white animate-glow" style={{ 
              animation: 'glow 2s ease-in-out infinite',
              textShadow: '0 0 20px rgba(99, 179, 237, 0.6)'
            }}>
              圣光工坊
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/" className="text-xs sm:text-base text-gray-300 hover:text-white transition-colors">
              首頁
            </Link>
            <Link to="/blog" className="text-xs sm:text-base text-gray-300 hover:text-white transition-colors">
              部落格
            </Link>
            <a href="#about" className="hidden sm:inline text-xs sm:text-base text-gray-300 hover:text-white transition-colors">
              關於我們
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const tools = [
    {
      icon: ImageIcon,
      title: "圖文事工助手",
      description: "為圖片添加專業的畫外音，讓靜態圖片變得生動有趣",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format"
    },
    {
      icon: Video,
      title: "視頻事工助手",
      description: "為視頻內容添加章節標記，方便弟兄姐妹快速定位感興趣的部分",
      imageUrl: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?q=80&w=800&auto=format"
    },
    {
      icon: BookOpen,
      title: "聖經教導事工",
      description: "輕鬆創作生動的聖經故事視頻，有效傳播福音",
      imageUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800&auto=format"
    },
    {
      icon: Heart,
      title: "敬拜事工助手",
      description: "提取敬拜視頻中的精彩片段，製作敬拜事工集錦",
      imageUrl: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=800&auto=format"
    },
    {
      icon: Clock,
      title: "主日事工助手",
      description: "自動生成主日崇拜的重點內容片段",
      imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format"
    },
    {
      icon: MessageCircle,
      title: "靈修事工助手",
      description: "與聖經進行個人化的深度交流，獲得屬靈生命指引",
      imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format"
    }
  ];

  const leftTools = tools.slice(0, Math.ceil(tools.length / 2));
  const rightTools = tools.slice(Math.ceil(tools.length / 2));

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 animate-glow" style={{ 
          animation: 'glow 2s ease-in-out infinite',
          textShadow: '0 0 30px rgba(99, 179, 237, 0.8)'
        }}>
          圣光工坊
        </h1>
        <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto">
          為現代事工提供智能化工具，讓聖光傳播更加溫暖高效
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-6">
        <div className="order-2 sm:order-1 flex flex-col w-full sm:w-auto items-center sm:items-end">
          {leftTools.map((tool, index) => (
            <ToolCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              imageUrl={tool.imageUrl}
              index={index}
            />
          ))}
        </div>

        <div className="order-1 sm:order-2 w-full flex justify-center">
          <CenterInput />
        </div>

        <div className="order-3 sm:order-3 flex flex-col w-full sm:w-auto items-center sm:items-start">
          {rightTools.map((tool, index) => (
            <ToolCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              imageUrl={tool.imageUrl}
              index={index + leftTools.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#01090F] to-[#071B2A]">
        <DonationBar />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;