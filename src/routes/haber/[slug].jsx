import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MessageCircle, Twitter, Linkedin } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewsCard from '../../components/NewsCard';
import TagList from '../../components/TagList';
import { setSEO, generateShareUrl } from '../../utils/seo';
import postsData from '../../data/posts.json';

function HaberSlug() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [posts] = useState(postsData);
  
  // Mevcut yazıyı bul
  const currentPost = useMemo(() => {
    return posts.find(post => post.slug === slug);
  }, [posts, slug]);

  // İlgili yazılar
  const relatedPosts = useMemo(() => {
    if (!currentPost) return [];
    
    return posts
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [posts, currentPost]);

  // İçindekiler tablosu
  const tableOfContents = useMemo(() => {
    if (!currentPost) return [];
    
    return currentPost.body
      .filter(item => item.type === 'h2')
      .map((item, index) => ({
        id: `heading-${index}`,
        title: item.content,
        index: index + 1
      }));
  }, [currentPost]);

  useEffect(() => {
    if (!currentPost) {
      navigate('/haber', { replace: true });
      return;
    }

    // SEO meta tag'leri güncelle
    setSEO({
      title: `${currentPost.title} – Kaysia Haber`,
      description: currentPost.excerpt,
      image: currentPost.cover,
      type: 'article',
      jsonLd: currentPost
    });
  }, [currentPost, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Emlak':
        return 'bg-blue-100 text-blue-800';
      case 'AI':
        return 'bg-purple-100 text-purple-800';
      case 'Web':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderBodyContent = (body) => {
    return body.map((item, index) => {
      switch (item.type) {
        case 'h2':
          const headingIndex = tableOfContents.findIndex(toc => toc.title === item.content);
          return (
            <h2 
              key={index} 
              id={`heading-${headingIndex}`}
              className="text-2xl font-bold text-gray-900 mt-8 mb-4"
            >
              {item.content}
            </h2>
          );
        case 'p':
          return (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {item.content}
            </p>
          );
        case 'img':
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="w-full rounded-lg shadow-lg my-6"
              loading="lazy"
            />
          );
        default:
          return null;
      }
    });
  };

  if (!currentPost) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/haber')}
            className="text-secondary hover:text-orange-600 font-semibold"
          >
            ← Haberlere Dön
          </button>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Kapak Görseli */}
              <div className="relative">
                <img
                  src={currentPost.cover}
                  alt={currentPost.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                {/* Kategori Rozeti */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(currentPost.category)}`}>
                    {currentPost.category}
                  </span>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-8">
                {/* Başlık */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {currentPost.title}
                </h1>

                {/* Meta Bilgiler */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(currentPost.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{currentPost.readingMinutes} dakika okuma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Yazar: {currentPost.author}</span>
                  </div>
                </div>

                {/* Paylaş Butonları */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Paylaş:</span>
                  <div className="flex gap-2">
                    <a
                      href={generateShareUrl('whatsapp', window.location.href, currentPost.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="WhatsApp'ta paylaş"
                    >
                      <MessageCircle size={16} />
                    </a>
                    <a
                      href={generateShareUrl('twitter', window.location.href, currentPost.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Twitter'da paylaş"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={generateShareUrl('linkedin', window.location.href, currentPost.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn'de paylaş"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>

                {/* Makale İçeriği */}
                <div className="prose prose-lg max-w-none">
                  {renderBodyContent(currentPost.body)}
                </div>

                {/* Etiketler */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Etiketler</h3>
                  <TagList tags={currentPost.tags} />
                </div>
              </div>
            </article>

            {/* İlgili Yazılar */}
            {relatedPosts.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Yazılar</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <NewsCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* İçindekiler */}
            {tableOfContents.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">İçindekiler</h3>
                <nav>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-gray-600 hover:text-secondary transition-colors block py-1"
                        >
                          {item.index}. {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default HaberSlug;
