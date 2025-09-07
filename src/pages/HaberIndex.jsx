import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import CategoryTabs from '../components/CategoryTabs';
import SearchBox from '../components/SearchBox';
import TagList from '../components/TagList';
import { setSEO } from '../utils/seo';
import postsData from '../data/posts.json';

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
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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
  const recentPosts = posts.slice(0, 5);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleTagClick = (tag) => {
    setActiveTag(activeTag === tag ? null : tag);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Haberler
          </h1>
          <p className="text-xl opacity-90">
            Emlak, AI ve Web dünyasından güncel içerikler
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-3">
            {/* Filtreler */}
            <div className="mb-8">
              <CategoryTabs
                categories={['all', 'Emlak', 'AI', 'Web']}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
              
              <div className="mt-4">
                <SearchBox onSearch={handleSearch} />
              </div>
            </div>

            {/* Sonuçlar */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredPosts.length} yazı bulundu
                {activeCategory !== 'all' && ` (${activeCategory} kategorisinde)`}
                {activeTag && ` (${activeTag} etiketinde)`}
                {searchTerm && ` ("${searchTerm}" aramasında)`}
              </p>
            </div>

            {/* Yazılar Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {paginatedPosts.map((post) => (
                  <NewsCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Arama kriterlerinize uygun yazı bulunamadı.
                </p>
              </div>
            )}

            {/* Sayfalama */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  const isActive = page === currentPage;
                  
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg border ${
                        isActive
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Popüler Etiketler */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Popüler Etiketler</h3>
                <TagList
                  tags={popularTags}
                  activeTag={activeTag}
                  onTagClick={handleTagClick}
                />
              </div>

              {/* Son Yazılar */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Son Yazılar</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/haber/${post.slug}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={post.cover}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(post.date).toLocaleDateString('tr-TR')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaberIndex;
