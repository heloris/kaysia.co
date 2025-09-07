import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, MessageCircle, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import { setSEO, generateShareUrl } from '../utils/seo';
import postsData from '../data/posts.json';

function HaberSlug() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState(null);

  // Post bulma
  useEffect(() => {
    const post = postsData.find(p => p.slug === slug);
    if (post) {
      setCurrentPost(post);
    } else {
      navigate('/haber', { replace: true });
    }
  }, [slug, navigate]);

  // SEO ve meta tag'ler
  useEffect(() => {
    if (!currentPost) return;

    setSEO({
      title: `${currentPost.title} – Kaysia Haber`,
      description: currentPost.excerpt,
      image: currentPost.cover,
      type: 'article',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": currentPost.title,
        "description": currentPost.excerpt,
        "datePublished": currentPost.date,
        "author": { "@type": "Person", "name": currentPost.author },
        "image": currentPost.cover,
        "articleSection": currentPost.category,
        "keywords": currentPost.tags.join(', '),
        "publisher": {
          "@type": "Organization",
          "name": "Kaysia Agency",
          "logo": { "@type": "ImageObject", "url": window.location.origin + "/Logo.png" }
        }
      }
    });
  }, [currentPost]);

  // İlgili yazılar
  const relatedPosts = useMemo(() => {
    if (!currentPost) return [];
    
    return postsData
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, 3);
  }, [currentPost]);

  // Table of Contents
  const toc = useMemo(() => {
    if (!currentPost?.body) return [];
    
    return currentPost.body
      .filter(item => item.type === 'h2')
      .map(item => ({
        id: item.content.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        title: item.content
      }));
  }, [currentPost]);

  const handleShare = (platform) => {
    const url = generateShareUrl(platform, window.location.href, currentPost.title);
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleTagClick = (tag) => {
    navigate(`/haber?tag=${tag}`);
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Yazı yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => navigate('/haber')}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Haberlere Dön
          </button>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentPost.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {currentPost.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-white/80">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(currentPost.date).toLocaleDateString('tr-TR')}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {currentPost.readingMinutes} dk okuma
            </div>
            <div className="flex items-center">
              <span className="mr-2">👤</span>
              {currentPost.author}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              {/* Kapak Görseli */}
              <div className="aspect-video bg-gray-200">
                <img
                  src={currentPost.cover}
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                {/* Özet */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {currentPost.excerpt}
                  </p>
                </div>

                {/* İçerik */}
                <div className="prose prose-lg max-w-none">
                  {currentPost.body.map((item, index) => {
                    switch (item.type) {
                      case 'h2':
                        const id = item.content.toLowerCase().replace(/[^a-z0-9]/g, '-');
                        return (
                          <h2 key={index} id={id} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {item.content}
                          </h2>
                        );
                      case 'p':
                        return (
                          <p key={index} className="text-gray-700 leading-relaxed mb-4">
                            {item.content}
                          </p>
                        );
                      case 'img':
                        return (
                          <img
                            key={index}
                            src={item.src}
                            alt={item.alt || ''}
                            className="w-full rounded-lg my-6"
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </div>

                {/* Paylaş Butonları */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Bu yazıyı paylaş:</h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </button>
                  </div>
                </div>

                {/* Etiketler */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Etiketler:</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className="bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* İlgili Yazılar */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Yazılar</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/haber/${post.slug}`}
                      className="group bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video bg-gray-200">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="p-4">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(post.date).toLocaleDateString('tr-TR')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">İçindekiler</h3>
                  <nav className="space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Yazı Bilgileri */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Yazı Bilgileri</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kategori:</span>
                    <span className="font-medium">{currentPost.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yazar:</span>
                    <span className="font-medium">{currentPost.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tarih:</span>
                    <span className="font-medium">
                      {new Date(currentPost.date).toLocaleDateString('tr-TR')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Okuma Süresi:</span>
                    <span className="font-medium">{currentPost.readingMinutes} dk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaberSlug;
