import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewsCard from '../../components/NewsCard';
import CategoryTabs from '../../components/CategoryTabs';
import SearchBox from '../../components/SearchBox';
import TagList from '../../components/TagList';
import { setSEO } from '../../utils/seo';
import postsData from '../../data/posts.json';

function HaberIndex() {
  const [posts] = useState(postsData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sayfa yüklendiğinde meta tag'leri güncelle
  useEffect(() => {
    setSEO({
      title: 'Haberler – Kaysia Agency',
      description: 'Emlak, AI ve Web dünyasından güncel içerikler.',
      image: '/Logo.png',
      type: 'website'
    });
  }, []);

  // Filtreleme ve arama
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Kategori filtresi
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // Etiket filtresi
    if (activeTag) {
      filtered = filtered.filter(post => post.tags.includes(activeTag));
    }

    // Arama filtresi
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [posts, activeCategory, activeTag, searchTerm]);

  // Sayfalama
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Popüler etiketler
  const popularTags = useMemo(() => {
    const tagCounts = {};
    posts.forEach(post => {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    
    return Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([tag]) => tag);
  }, [posts]);

  // Son yazılar
  const recentPosts = useMemo(() => {
    return posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, [posts]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTag(null);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleTagClick = (tag) => {
    setActiveTag(activeTag === tag ? null : tag);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Haberler</h1>
            <p className="text-xl text-gray-600 mt-2">
              Emlak, AI ve Web dünyasından güncel içerikler
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-3">
            {/* Kategori Sekmeleri */}
            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Arama Kutusu */}
            <SearchBox onSearch={handleSearch} />

            {/* Aktif Filtreler */}
            {(activeTag || searchTerm) && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Aktif Filtreler:</h3>
                <div className="flex flex-wrap gap-2">
                  {activeTag && (
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                      #{activeTag}
                      <button
                        onClick={() => setActiveTag(null)}
                        className="ml-2 hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {searchTerm && (
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-2 hover:text-gray-500"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Sonuç Sayısı */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredPosts.length} yazı bulundu
                {totalPages > 1 && ` • Sayfa ${currentPage} / ${totalPages}`}
              </p>
            </div>

            {/* Yazı Kartları */}
            {currentPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {currentPosts.map((post) => (
                  <NewsCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Arama kriterlerinize uygun yazı bulunamadı.</p>
              </div>
            )}

            {/* Sayfalama */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  Önceki
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg ${
                        page === currentPage
                          ? 'bg-secondary text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sonraki
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Popüler Etiketler */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popüler Etiketler</h3>
              <TagList
                tags={popularTags}
                onTagClick={handleTagClick}
                activeTag={activeTag}
              />
            </div>

            {/* Son Yazılar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Son Yazılar</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      <a 
                        href={`/haber/${post.slug}`}
                        className="hover:text-secondary transition-colors"
                      >
                        {post.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default HaberIndex;
