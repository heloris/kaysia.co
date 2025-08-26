// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Footer yılını otomatik güncelle
    updateFooterYear();
    
    // Form işlevselliğini başlat
    initializeForm();
    
    // Dil değiştirme işlevselliğini başlat
    initializeLanguageSwitcher();
    
    // Kaydedilmiş dili yükle
    loadSavedLanguage();
    
    // Smooth scroll fonksiyonlarını tanımla
    window.scrollToForm = scrollToForm;
    window.scrollToPackages = scrollToPackages;
});

// Footer yılını güncelle
function updateFooterYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Dil değiştirme işlevselliği
function initializeLanguageSwitcher() {
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // Dropdown toggle
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownBtn.classList.toggle('active');
    });
    
    // Dropdown dışına tıklandığında kapat
    document.addEventListener('click', function(e) {
        // Eğer tıklanan element dropdown menü veya buton değilse kapat
        if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownBtn.classList.remove('active');
        }
    });
    
    // Dil seçenekleri
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const selectedLang = this.getAttribute('data-lang');
            
            // Aktif seçenek stilini güncelle
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Dropdown butonunu güncelle
            const langNames = {
                'tr': 'TR',
                'en': 'EN', 
                'ru': 'RU',
                'es': 'ES',
                'fr': 'FR',
                'de': 'DE'
            };
            currentLangSpan.textContent = langNames[selectedLang];
            
            // Dil değiştir
            changeLanguage(selectedLang);
            
            // Dropdown'ı kapat
            dropdownMenu.classList.remove('show');
            dropdownBtn.classList.remove('active');
        });
    });
    
    // ESC tuşu ile dropdown'ı kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdownMenu.classList.remove('show');
            dropdownBtn.classList.remove('active');
        }
    });
}

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    // Tüm dil elementlerini gizle
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = 'none';
    });
    
    // Seçilen dildeki elementleri göster
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
        el.style.display = '';
    });
    
    // Form elementlerini özel olarak işle
    const formElements = document.querySelectorAll('input, textarea, select');
    formElements.forEach(el => {
        const langElements = el.parentElement.querySelectorAll(`[data-lang="${lang}"]`);
        if (langElements.length > 0) {
            // Placeholder'ı güncelle
            if (el.hasAttribute('placeholder')) {
                const placeholderElement = el.parentElement.querySelector(`[data-lang="${lang}"]`);
                if (placeholderElement && placeholderElement.hasAttribute('placeholder')) {
                    el.placeholder = placeholderElement.getAttribute('placeholder');
                }
            }
        }
    });
    
    // Local storage'a kaydet
    localStorage.setItem('selectedLanguage', lang);
}

// Sayfa yüklendiğinde kaydedilmiş dili yükle
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
        
        // Aktif seçenek stilini güncelle
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === savedLang) {
                option.classList.add('active');
            }
        });
        
        // Dropdown butonunu güncelle
        const currentLangSpan = document.querySelector('.current-lang');
        const langNames = {
            'tr': 'TR',
            'en': 'EN', 
            'ru': 'RU',
            'es': 'ES',
            'fr': 'FR',
            'de': 'DE'
        };
        if (currentLangSpan && langNames[savedLang]) {
            currentLangSpan.textContent = langNames[savedLang];
        }
    }
}

// Form işlevselliğini başlat
function initializeForm() {
    const isCompanyCheckbox = document.getElementById('isCompany');
    const companyFields = document.getElementById('companyFields');
    const contactForm = document.querySelector('.contact-form');
    
    // Aktif dildeki submit butonunu bul
    function getActiveSubmitBtn() {
        const currentLang = localStorage.getItem('selectedLanguage') || 'tr';
        const buttonIds = {
            'tr': 'submitBtn',
            'en': 'submitBtnEn',
            'ru': 'submitBtnRu',
            'es': 'submitBtnEs',
            'fr': 'submitBtnFr',
            'de': 'submitBtnDe'
        };
        return document.getElementById(buttonIds[currentLang]);
    }
    
    // Şirket checkbox işlevselliği
    if (isCompanyCheckbox && companyFields) {
        isCompanyCheckbox.addEventListener('change', function() {
            if (this.checked) {
                companyFields.style.display = 'block';
                // Smooth animation ile göster
                companyFields.style.opacity = '0';
                companyFields.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    companyFields.style.transition = 'all 0.3s ease';
                    companyFields.style.opacity = '1';
                    companyFields.style.transform = 'translateY(0)';
                }, 10);
            } else {
                // Smooth animation ile gizle
                companyFields.style.transition = 'all 0.3s ease';
                companyFields.style.opacity = '0';
                companyFields.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    companyFields.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Form submit işlevselliği
    if (contactForm) {
        let isFirstClick = true;
        let isJokeActive = false;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const activeSubmitBtn = getActiveSubmitBtn();
            if (!activeSubmitBtn) return;
            
            if (isFirstClick && !isJokeActive) {
                // İlk tıklama - şaka başlat
                isJokeActive = true;
                startButtonJoke(activeSubmitBtn);
                isFirstClick = false;
                return;
            }
            
            // Gerçek form gönderimi
            submitForm(contactForm);
        });
        
        // Tüm submit butonlarına mouse enter event ekle
        const allSubmitBtns = document.querySelectorAll('.submit-btn');
        allSubmitBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                if (isJokeActive) {
                    // Mouse yaklaştığında hemen kaç
                    const x = Math.random() * 400 - 200;
                    const y = Math.random() * 200 - 100;
                    this.style.left = x + 'px';
                    this.style.top = y + 'px';
                }
            });
        });
    }
}

// Buton şakası
function startButtonJoke(button) {
    const originalText = button.textContent;
    const originalPosition = button.style.position;
    
    // Butonun pozisyonunu relative yap
    button.style.position = 'relative';
    
    // İlk mesaj
    const currentLang = localStorage.getItem('selectedLanguage') || 'tr';
    const catchMessages = {
        'tr': 'Hadi yakala!',
        'en': 'Catch me!',
        'ru': 'Поймай меня!',
        'es': '¡Atrápame!',
        'fr': 'Attrape-moi!',
        'de': 'Fang mich!'
    };
    button.textContent = catchMessages[currentLang];
    button.classList.add('running');
    
    // Butonu rastgele hareket ettir
    let moveCount = 0;
    const maxMoves = 50; // Daha fazla hareket
    let startTime = Date.now();
    
    function moveButton() {
        const elapsedTime = (Date.now() - startTime) / 1000;
        
        // 8 saniye sonra durdur
        if (elapsedTime >= 8) {
            // Şaka bitti, normal haline döndür
            button.classList.remove('running');
            const jokeMessages = {
                'tr': 'Şaka şaka! Şimdi Gönder!',
                'en': 'Just kidding! Send Now!',
                'ru': 'Шутка! Отправить Сейчас!',
                'es': '¡Broma! ¡Enviar Ahora!',
                'fr': 'Blague! Envoyer Maintenant!',
                'de': 'Spaß! Jetzt Senden!'
            };
            button.textContent = jokeMessages[currentLang];
            button.style.position = originalPosition;
            button.style.left = '';
            button.style.top = '';
            button.style.transition = 'all 0.3s ease';
            button.style.cursor = 'pointer';
            button.style.pointerEvents = 'auto';
            button.style.userSelect = 'auto';
            return;
        }
        
        // Daha geniş alan ve daha hızlı hareket
        const x = Math.random() * 400 - 200; // -200 ile +200 arası
        const y = Math.random() * 200 - 100;  // -100 ile +100 arası
        
        // Zaman geçtikçe daha hızlı hareket et
        const speed = Math.max(100, 300 - (elapsedTime * 20));
        
        button.style.left = x + 'px';
        button.style.top = y + 'px';
        button.style.transition = `all ${speed}ms ease-out`;
        
        moveCount++;
        
        // Sonraki hareket için bekle (giderek daha hızlı)
        setTimeout(moveButton, speed);
    }
    
    // İlk hareketi başlat
    setTimeout(moveButton, 100);
}

// Form gönderimi
function submitForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Loading durumu
    const currentLang = localStorage.getItem('selectedLanguage') || 'tr';
    const loadingMessages = {
        'tr': 'Gönderiliyor...',
        'en': 'Sending...',
        'ru': 'Отправляется...',
        'es': 'Enviando...',
        'fr': 'Envoi...',
        'de': 'Senden...'
    };
    submitBtn.textContent = loadingMessages[currentLang];
    submitBtn.disabled = true;
    form.classList.add('loading');
    
    // Form verilerini topla
    const formData = new FormData(form);
    
    // Netlify form gönderimi simülasyonu
    setTimeout(() => {
        // Başarılı gönderim simülasyonu
        showSuccessMessage(form);
        
        // Formu sıfırla
        form.reset();
        
        // Şirket alanlarını gizle
        const companyFields = document.getElementById('companyFields');
        if (companyFields) {
            companyFields.style.display = 'none';
        }
        
        // Butonu normale döndür
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        form.classList.remove('loading');
        
        // Başarı mesajını 5 saniye sonra gizle
        setTimeout(() => {
            hideMessages(form);
        }, 5000);
        
    }, 2000);
}

// Başarı mesajı göster
function showSuccessMessage(form) {
    hideMessages(form);
    
    const currentLang = localStorage.getItem('selectedLanguage') || 'tr';
    const successMessages = {
        'tr': '<strong>🎉 Teşekkürler!</strong><br>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
        'en': '<strong>🎉 Thank you!</strong><br>Your message has been sent successfully. We will get back to you as soon as possible.',
        'ru': '<strong>🎉 Спасибо!</strong><br>Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.',
        'es': '<strong>🎉 ¡Gracias!</strong><br>Su mensaje ha sido enviado exitosamente. Nos pondremos en contacto con usted lo antes posible.',
        'fr': '<strong>🎉 Merci!</strong><br>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
        'de': '<strong>🎉 Danke!</strong><br>Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.'
    };
    
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = successMessages[currentLang];
    
    form.appendChild(successMsg);
    successMsg.style.display = 'block';
}

// Hata mesajı göster
function showErrorMessage(form, message) {
    hideMessages(form);
    
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.innerHTML = `
        <strong>❌ Hata!</strong><br>
        ${message}
    `;
    
    form.appendChild(errorMsg);
    errorMsg.style.display = 'block';
}

// Mesajları gizle
function hideMessages(form) {
    const messages = form.querySelectorAll('.success-message, .error-message');
    messages.forEach(msg => {
        msg.style.display = 'none';
    });
}

// Smooth scroll fonksiyonları
function scrollToForm() {
    const form = document.getElementById('contact');
    if (form) {
        form.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToPackages() {
    const packages = document.getElementById('packages');
    if (packages) {
        packages.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Sayfa yüklendiğinde animasyonlar
window.addEventListener('load', function() {
    // Hero animasyonu
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Package kartları animasyonu
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
});

// Intersection Observer ile scroll animasyonları
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animasyonlu elementleri gözlemle
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.package-card, .contact-form');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Form validasyonu
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#e8e4df';
        }
    });
    
    return isValid;
}

// Input focus efektleri
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Parallax efekti (opsiyonel)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Klavye kısayolları
document.addEventListener('keydown', function(e) {
    // ESC tuşu ile form mesajlarını kapat
    if (e.key === 'Escape') {
        const form = document.querySelector('.contact-form');
        if (form) {
            hideMessages(form);
        }
    }
    
    // Enter tuşu ile form gönder (sadece textarea'da değilse)
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form && validateForm(form)) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});
