// Domain utility functions for localStorage management

const DOMAIN_KEY = 'kaysia.emlak.domain';

export function getStoredDomain() {
  try {
    return localStorage.getItem(DOMAIN_KEY);
  } catch (error) {
    console.error('Error getting stored domain:', error);
    return null;
  }
}

export function setStoredDomain(domain) {
  try {
    localStorage.setItem(DOMAIN_KEY, domain);
  } catch (error) {
    console.error('Error setting stored domain:', error);
  }
}

export function removeStoredDomain() {
  try {
    localStorage.removeItem(DOMAIN_KEY);
  } catch (error) {
    console.error('Error removing stored domain:', error);
  }
}

export function sanitizeDomain(str) {
  if (!str || typeof str !== 'string') {
    return 'kaysiaemlak.com';
  }
  
  // Küçük harfe çevir
  let sanitized = str.toLowerCase();
  
  // Türkçe karakterleri değiştir
  const turkishChars = {
    'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
    'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
  };
  
  for (const [turkish, english] of Object.entries(turkishChars)) {
    sanitized = sanitized.replace(new RegExp(turkish, 'g'), english);
  }
  
  // Boşluk ve özel karakterleri temizle, sadece alfanumerik ve nokta bırak
  sanitized = sanitized.replace(/[^a-z0-9.]/g, '');
  
  // Boş ise default domain döndür
  if (!sanitized || sanitized === '.') {
    return 'kaysiaemlak.com';
  }
  
  // .com ekle eğer yoksa
  if (!sanitized.includes('.')) {
    sanitized += '.com';
  }
  
  return sanitized;
}
