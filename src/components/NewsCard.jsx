import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function NewsCard({ post }) {
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

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Kapak Görseli */}
      <div className="relative">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        
        {/* Kategori Rozeti */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* İçerik */}
      <div className="p-6">
        {/* Başlık */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link 
            to={`/haber/${post.slug}`}
            className="hover:text-secondary transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* Özet */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Bilgiler */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readingMinutes} dk</span>
            </div>
          </div>
        </div>

        {/* CTA Butonu */}
        <Link
          to={`/haber/${post.slug}`}
          className="inline-flex items-center gap-2 text-secondary hover:text-orange-600 font-semibold transition-colors"
        >
          Oku
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;
