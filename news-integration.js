/**
 * Kaysia.co News Integration System
 * N8N + Google Sheets + GitHub Integration
 */

class NewsManager {
    constructor(config = {}) {
        this.config = {
            n8nWebhookUrl: config.n8nWebhookUrl || null,
            refreshInterval: config.refreshInterval || 300000, // 5 minutes
            retryAttempts: config.retryAttempts || 3,
            retryDelay: config.retryDelay || 2000,
            enableAutoRefresh: config.enableAutoRefresh || true,
            ...config
        };
        
        this.cache = {
            news: [],
            lastUpdate: null,
            isLoading: false
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        if (this.config.enableAutoRefresh) {
            this.startAutoRefresh();
        }
        this.loadNews();
    }

    setupEventListeners() {
        // Page visibility API for efficient loading
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.shouldRefresh()) {
                this.loadNews();
            }
        });

        // Manual refresh button
        const refreshBtn = document.getElementById('refreshNewsBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.loadNews(true));
        }
    }

    shouldRefresh() {
        if (!this.cache.lastUpdate) return true;
        const timeSinceUpdate = Date.now() - this.cache.lastUpdate;
        return timeSinceUpdate > this.config.refreshInterval;
    }

    startAutoRefresh() {
        setInterval(() => {
            if (!document.hidden && this.shouldRefresh()) {
                this.loadNews();
            }
        }, this.config.refreshInterval);
    }

    async loadNews(forceRefresh = false) {
        if (this.cache.isLoading && !forceRefresh) return;
        
        this.cache.isLoading = true;
        this.showLoadingState();

        try {
            let newsData;
            
            if (this.config.n8nWebhookUrl) {
                // Load from N8N webhook
                newsData = await this.loadFromN8N();
            } else {
                // Fallback to static content
                newsData = await this.loadStaticNews();
            }

            this.cache.news = newsData;
            this.cache.lastUpdate = Date.now();
            this.renderNews(newsData);
            
        } catch (error) {
            console.error('News loading failed:', error);
            this.showErrorState(error.message);
        } finally {
            this.cache.isLoading = false;
        }
    }

    async loadFromN8N() {
        // Try N8N webhook first
        if (this.config.n8nWebhookUrl) {
            try {
                const response = await this.fetchWithRetry(this.config.n8nWebhookUrl);
                if (response.ok) {
                    const data = await response.json();
                    return this.normalizeNewsData(data);
                }
            } catch (error) {
                console.log('N8N webhook failed, trying direct Google Sheets:', error.message);
            }
        }
        
        // Fallback to direct Google Sheets API
        return await this.loadFromGoogleSheets();
    }
    
    async loadFromGoogleSheets() {
        const sheetsId = '1H73DmuwWNDWh5rvguU6v3i6nSZFykzpLryTkWuaNB40';
        const range = 'A1:G100'; // Adjust range as needed
        const apiKey = 'AIzaSyBJVwXNhAx7YxYC-vL8zLRkSj_K9xQXdQ4'; // You'll need to add your API key
        
        // Public Google Sheets CSV export (no API key needed)
        const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetsId}/export?format=csv&gid=0`;
        
        try {
            const response = await this.fetchWithRetry(csvUrl);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const csvText = await response.text();
            const data = this.parseCSV(csvText);
            return this.normalizeNewsData(data);
        } catch (error) {
            console.error('Google Sheets direct access failed:', error);
            throw error;
        }
    }
    
    parseCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
        const data = [];
        
        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;
            
            const values = this.parseCSVLine(lines[i]);
            if (values.length >= headers.length) {
                const item = {};
                headers.forEach((header, index) => {
                    item[header] = values[index] || '';
                });
                data.push(item);
            }
        }
        
        return data;
    }
    
    parseCSVLine(line) {
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        
        values.push(current.trim());
        return values;
    }

    async loadStaticNews() {
        // Fallback to sample news
        const response = await fetch('./news-sample.json');
        if (!response.ok) {
            throw new Error('Static news file not found');
        }
        return await response.json();
    }

    async fetchWithRetry(url, attempts = 0) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });
            
            return response;
        } catch (error) {
            if (attempts < this.config.retryAttempts) {
                await this.delay(this.config.retryDelay);
                return this.fetchWithRetry(url, attempts + 1);
            }
            throw error;
        }
    }

    normalizeNewsData(data) {
        // Normalize data structure from Kaysia's Google Sheets
        // Actual columns: hash, title, link, date
        if (!Array.isArray(data)) {
            if (data.news && Array.isArray(data.news)) {
                data = data.news;
            } else if (data.items && Array.isArray(data.items)) {
                data = data.items;
            } else if (data.values && Array.isArray(data.values)) {
                // Google Sheets API response format
                data = data.values;
            } else {
                throw new Error('Invalid data structure');
            }
        }

        return data.map((item, index) => {
            // Handle both object and array formats
            let newsItem;
            
            if (Array.isArray(item)) {
                // Google Sheets returns arrays [hash, title, link, date]
                newsItem = {
                    hash: item[0] || '',
                    title: item[1] || '',
                    link: item[2] || '',
                    date: item[3] || ''
                };
            } else if (typeof item === 'object') {
                // Object format from CSV or N8N
                newsItem = {
                    hash: item.hash || item['hash'] || item[Object.keys(item)[0]] || '',
                    title: item.title || item['title'] || item[Object.keys(item)[1]] || '',
                    link: item.link || item['link'] || item[Object.keys(item)[2]] || '',
                    date: item.date || item['date'] || item[Object.keys(item)[3]] || ''
                };
            } else {
                return null; // Skip invalid items
            }
            
            // Skip empty rows or header
            if (!newsItem.title || newsItem.title.trim() === '' || newsItem.title === 'title') {
                return null;
            }
            
            // Generate summary from title
            const summary = this.generateSummaryFromTitle(newsItem.title);
            
            // Map to standard format
            return {
                id: newsItem.hash || this.generateId(),
                title: newsItem.title || 'Başlık Yok',
                summary: summary,
                content: '', // No content in your sheets
                date: this.formatDate(newsItem.date || new Date().toISOString().split('T')[0]),
                readTime: this.calculateReadTime(newsItem.title + ' ' + summary),
                author: 'Kaysia.co',
                category: this.extractCategoryFromTitle(newsItem.title),
                tags: this.extractTags(this.extractCategoryFromTitle(newsItem.title), newsItem.title),
                featured: index === 0, // First item is featured
                status: 'published',
                source: 'google-sheets',
                link: newsItem.link || '',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            };
        }).filter(item => item !== null); // Remove null items
    }

    renderNews(newsData) {
        const container = document.getElementById('newsContainer');
        if (!container) return;

        if (!newsData || newsData.length === 0) {
            this.showEmptyState();
            return;
        }

        const newsHtml = newsData
            .filter(news => news.status === 'published')
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(news => this.createNewsHTML(news))
            .join('');

        container.innerHTML = newsHtml;
        this.hideLoadingState();
        this.updateLastUpdateTime();
    }

    createNewsHTML(news) {
        const featuredClass = news.featured ? 'featured' : '';
        const categoryIcon = this.getCategoryIcon(news.category);
        const hasExternalLink = news.link && news.link.startsWith('http');
        
        return `
            <article class="news-item ${featuredClass}" data-id="${news.id}">
                <h2>${categoryIcon} ${news.title}</h2>
                <div class="news-meta">
                    📅 ${news.date} • ⏱️ ${news.readTime} dk okuma • 
                    📊 ${news.source === 'google-sheets' ? 'Google Sheets' : 'Kaynak: ' + news.source}
                    ${news.featured ? ' • ⭐ Öne Çıkan' : ''}
                    ${hasExternalLink ? ` • <a href="${news.link}" target="_blank" rel="noopener">🔗 Kaynakta Oku</a>` : ''}
                </div>
                <div class="news-content">
                    <p>${news.summary}</p>
                    ${news.content ? `<div class="news-full-content">${news.content}</div>` : ''}
                    ${news.tags.length > 0 ? `
                        <div class="news-tags">
                            ${news.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}
                        </div>
                    ` : ''}
                    ${hasExternalLink ? `
                        <div style="margin-top: 20px;">
                            <a href="${news.link}" target="_blank" rel="noopener" class="external-link-btn">
                                🔗 Tam Makaleyi Oku
                            </a>
                        </div>
                    ` : ''}
                </div>
            </article>
        `;
    }

    getCategoryIcon(category) {
        const icons = {
            'Web Tasarım': '🎨',
            'SEO': '🎯',
            'Otomasyon': '⚡',
            'Teknoloji': '💻',
            'Genel': '📰',
            'Yapay Zeka': '🤖',
            'Sağlık Teknolojisi': '🍿',
            'Enerji Teknolojisi': '⚙️',
            'Uzay Teknolojisi': '🚀',
            'Çevre Teknolojisi': '🌍',
            'Yaşam Teknolojisi': '🌱',
            'Genel Teknoloji': '💻',
            'default': '📄'
        };
        return icons[category] || icons.default;
    }

    showLoadingState() {
        const loadingElement = document.querySelector('.loading-text');
        if (loadingElement) {
            loadingElement.textContent = '🔄 Haberler güncelleniyor...';
            loadingElement.style.display = 'block';
        }
    }

    hideLoadingState() {
        const loadingElement = document.querySelector('.loading-text');
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }

    showErrorState(message) {
        const container = document.getElementById('newsContainer');
        if (container) {
            container.innerHTML = `
                <div class="error-state">
                    <h3>⚠️ Haberler Yüklenemedi</h3>
                    <p>Hata: ${message}</p>
                    <button onclick="newsManager.loadNews(true)" class="retry-btn">
                        🔄 Tekrar Dene
                    </button>
                </div>
            `;
        }
    }

    showEmptyState() {
        const container = document.getElementById('newsContainer');
        if (container) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>📭 Henüz Haber Yok</h3>
                    <p>Güncel haberler için birazdan tekrar kontrol edin.</p>
                </div>
            `;
        }
    }

    updateLastUpdateTime() {
        const timeElement = document.getElementById('lastUpdateTime');
        if (timeElement) {
            const now = new Date();
            timeElement.textContent = `Son güncelleme: ${now.toLocaleString('tr-TR')}`;
        }
    }

    formatDate(dateString) {
        if (!dateString) return new Date().toLocaleDateString('tr-TR');
        
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('tr-TR');
        } catch {
            return dateString;
        }
    }

    formatBullets(bulletsText) {
        if (!bulletsText) return '';
        
        // If it's already HTML, return as is
        if (bulletsText.includes('<')) {
            return bulletsText;
        }
        
        // Convert bullet points to HTML list
        const lines = bulletsText.split('\n').filter(line => line.trim());
        if (lines.length > 1) {
            const listItems = lines.map(line => {
                const cleaned = line.replace(/^[-*•]\s*/, '').trim();
                return cleaned ? `<li>${cleaned}</li>` : '';
            }).filter(item => item).join('');
            
            return listItems ? `<ul>${listItems}</ul>` : bulletsText;
        }
        
        return bulletsText;
    }
    
    calculateReadTime(text) {
        if (!text) return '2';
        
        const wordCount = text.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200); // Average reading speed
        return Math.max(readTime, 1).toString();
    }
    
    extractTags(category, title) {
        const tags = [];
        
        if (category) {
            tags.push(category.toLowerCase().replace(/\s+/g, '-'));
        }
        
        // Extract potential tags from title
        if (title) {
            const commonTechTerms = ['web', 'tasar\u0131m', 'seo', 'ai', 'teknoloji', 'mobile', 'responsive'];
            const titleLower = title.toLowerCase();
            
            commonTechTerms.forEach(term => {
                if (titleLower.includes(term) && !tags.includes(term)) {
                    tags.push(term);
                }
            });
        }
        
        return tags;
    }
    
    generateSummaryFromTitle(title) {
        if (!title) return 'Haber içeriği mevcut.';
        
        // Extract domain information if available  
        if (title.includes('AI')) {
            return 'Yapay zeka teknolojileri hakkında güncel gelişme.';
        } else if (title.includes('health') || title.includes('therapy')) {
            return 'Sağlık teknolojileri alanında yeni yaklaşımlar.';
        } else if (title.includes('nuclear') || title.includes('thorium')) {
            return 'Nükleer enerji teknolojilerindeki ilerlemeler.';
        } else if (title.includes('space')) {
            return 'Uzay teknolojileri ve keşifler hakkında.';
        } else if (title.includes('climate')) {
            return 'İklim değişikliği ve çevre teknolojileri.';
        } else {
            return 'Teknoloji dünyasından güncel haberler.';
        }
    }
    
    extractCategoryFromTitle(title) {
        if (!title) return 'Genel';
        
        const titleLower = title.toLowerCase();
        
        if (titleLower.includes('ai') || titleLower.includes('artificial') || titleLower.includes('doppel')) {
            return 'Yapay Zeka';
        } else if (titleLower.includes('health') || titleLower.includes('therapy') || titleLower.includes('medical')) {
            return 'Sağlık Teknolojisi';
        } else if (titleLower.includes('nuclear') || titleLower.includes('thorium') || titleLower.includes('energy')) {
            return 'Enerji Teknolojisi';
        } else if (titleLower.includes('space') || titleLower.includes('human')) {
            return 'Uzay Teknolojisi';
        } else if (titleLower.includes('climate') || titleLower.includes('lidar')) {
            return 'Çevre Teknolojisi';
        } else if (titleLower.includes('diet') || titleLower.includes('food')) {
            return 'Yaşam Teknolojisi';
        } else {
            return 'Genel Teknoloji';
        }
    }

    generateId() {
        return 'news_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Public API methods
    refresh() {
        return this.loadNews(true);
    }

    getNews() {
        return this.cache.news;
    }

    getNewsByCategory(category) {
        return this.cache.news.filter(news => news.category === category);
    }

    searchNews(query) {
        const lowercaseQuery = query.toLowerCase();
        return this.cache.news.filter(news => 
            news.title.toLowerCase().includes(lowercaseQuery) ||
            news.summary.toLowerCase().includes(lowercaseQuery) ||
            news.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
        );
    }
}

// Google Sheets Integration Helper
class GoogleSheetsConnector {
    static generateWebhookData(sheetData) {
        return sheetData.map((row, index) => ({
            id: row.id || (index + 1).toString(),
            title: row.title || row.baslik || '',
            summary: row.summary || row.ozet || '',
            content: row.content || row.icerik || '',
            date: row.date || row.tarih || new Date().toISOString().split('T')[0],
            readTime: row.readTime || row.okuma_suresi || '2',
            author: row.author || row.yazar || 'Kaysia.co',
            category: row.category || row.kategori || 'Genel',
            tags: typeof row.tags === 'string' ? row.tags.split(',').map(t => t.trim()) : (row.tags || []),
            featured: row.featured === 'TRUE' || row.featured === true || row.onemli === 'TRUE',
            status: row.status || row.durum || 'published'
        }));
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NewsManager, GoogleSheetsConnector };
}

// Auto-initialize when used in browser
if (typeof window !== 'undefined') {
    window.NewsManager = NewsManager;
    window.GoogleSheetsConnector = GoogleSheetsConnector;
}