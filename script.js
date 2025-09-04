// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeSystem();
    initializeCountdown();
    initializeFAQ();
    initializeHeaderEffects();
    initializeFormHandling();
    initializeReviewsCarousel();
    initializeModals();
    setCurrentYear();
    initializeSmoothScrolling();
    initializeMobileMenu();
    initializePhoneFormatting();
    initializeLazyLoading();
});

// ===== THEME SYSTEM =====
function initializeThemeSystem() {
    const themeToggle = document.getElementById('themeToggle');
    const themeCards = document.querySelectorAll('.theme-card');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('kaysia-theme') || 'kaysia-light';
    applyTheme(savedTheme);
    updateThemeToggle(savedTheme);
    
    // Theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'kaysia-light';
            const nextTheme = currentTheme === 'kaysia-light' ? 'kaysia-dark' : 'kaysia-light';
            applyTheme(nextTheme);
            updateThemeToggle(nextTheme);
        });
    }
    
    // Theme cards
    themeCards.forEach(card => {
        card.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
            updateThemeToggle(theme);
        });
    });
}

function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('kaysia-theme', themeName);
    
    // Update favicon based on theme
    updateFavicon(themeName);
}

function updateThemeToggle(themeName) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('.theme-icon');
        if (themeName === 'kaysia-dark') {
            icon.textContent = '☀️';
        } else {
            icon.textContent = '🌙';
        }
    }
}

function updateFavicon(themeName) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        if (themeName === 'kaysia-dark') {
            favicon.href = 'favicon-dark.png';
        } else {
            favicon.href = 'favicon.png';
        }
    }
}

// ===== COUNTDOWN TIMER =====
function initializeCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const nextMonday = getNextMonday();
    const timeLeft = nextMonday - now;
    
    if (timeLeft <= 0) {
        // Reset to next Monday
        nextMonday.setDate(nextMonday.getDate() + 7);
        updateCountdownDisplay(0, 0, 0, 0);
        document.getElementById('countdownMessage').textContent = 'Yeni fırsatlar başladı!';
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    updateCountdownDisplay(days, hours, minutes, seconds);
}

function getNextMonday() {
    const now = new Date();
    const daysUntilMonday = (8 - now.getDay()) % 7;
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilMonday);
    nextMonday.setHours(0, 0, 0, 0);
    return nextMonday;
}

function updateCountdownDisplay(days, hours, minutes, seconds) {
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// ===== FAQ ACCORDION =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ===== HEADER SCROLL EFFECTS =====
function initializeHeaderEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== MOBILE OPTIMIZATION ENHANCEMENTS =====

// Mobile-first touch event handling
function initializeMobileOptimizations() {
    // Prevent double-tap zoom on buttons
    const touchElements = document.querySelectorAll('.btn, .nav-link, .theme-btn');
    touchElements.forEach(element => {
        element.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        });
    });
    
    // Fix viewport height for mobile browsers
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', () => {
        setTimeout(setVH, 100);
    });
    
    // Optimize scroll performance
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Add scroll-based optimizations here
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    
    // Touch gesture improvements
    let startY = 0;
    let endY = 0;
    
    document.addEventListener('touchstart', e => {
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        endY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const threshold = 50;
        const diffY = startY - endY;
        
        if (Math.abs(diffY) > threshold) {
            if (diffY > 0) {
                // Swiped up - could trigger scroll to top or other actions
            } else {
                // Swiped down - could trigger refresh or other actions
            }
        }
    }
    
    // Improve form input experience on mobile
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        // Auto-zoom prevention
        input.addEventListener('focus', function() {
            if (window.innerWidth < 768) {
                this.style.fontSize = '16px';
            }
        });
        
        // Better mobile keyboard handling
        input.addEventListener('blur', function() {
            window.scrollTo(0, 0);
        });
    });
    
    // Enhanced mobile menu functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on nav link click
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Optimize image loading for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading attribute for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Add error handling
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
    
    // Mobile-specific analytics tracking
    if (typeof gtag !== 'undefined') {
        // Track mobile-specific events
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            gtag('event', 'mobile_visit', {
                'custom_parameter': 'mobile_optimization_active'
            });
        }
        
        // Track orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                gtag('event', 'orientation_change', {
                    'orientation': window.orientation
                });
            }, 100);
        });
    }
}

// ===== ENHANCED FORM HANDLING =====
function initializeFormHandling() {
    const forms = document.querySelectorAll('.application-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
        
        // Real-time form validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateForm(form);
            });
        });
    });
}

function handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(form);
    
    // Submit to Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showSuccessModal();
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    const submitBtn = form.querySelector('button[type="submit"]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });
    
    // Check checkboxes
    const checkboxes = form.querySelectorAll('input[type="checkbox"][required]');
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            isValid = false;
        }
    });
    
    submitBtn.disabled = !isValid;
}

// ===== REVIEWS CAROUSEL =====
function initializeReviewsCarousel() {
    const carousel = document.getElementById('reviewsCarousel');
    if (!carousel) return;
    
    let scrollPosition = 0;
    const scrollSpeed = 1;
    
    function autoScroll() {
        scrollPosition += scrollSpeed;
        carousel.scrollLeft = scrollPosition;
        
        // Reset scroll position when reaching the end
        if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
            scrollPosition = 0;
        }
    }
    
    setInterval(autoScroll, 50);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', function() {
        carousel.style.animationPlayState = 'paused';
    });
    
    carousel.addEventListener('mouseleave', function() {
        carousel.style.animationPlayState = 'running';
    });
}

// ===== MODALS =====
function initializeModals() {
    const kvkkLink = document.getElementById('kvkkLink');
    const gizlilikLink = document.getElementById('gizlilikLink');
    const modals = document.querySelectorAll('.modal');
    
    // Open modals
    if (kvkkLink) {
        kvkkLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('kvkkModal');
        });
    }
    
    if (gizlilikLink) {
        gizlilikLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('gizlilikModal');
        });
    }
    
    // Close modals
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                closeModal(modal.id);
            });
        }
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // KVKK modal kapatıldığında checkbox'ı otomatik true yap
        if (modalId === 'kvkkModal') {
            const kvkkCheckboxes = document.querySelectorAll('input[name="kvkkOnay"]');
            kvkkCheckboxes.forEach(checkbox => {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event('change'));
            });
        }
    }
}

function showSuccessModal() {
    openModal('successModal');
}

// ===== UTILITY FUNCTIONS =====
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

function initializePhoneFormatting() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                value = '+90 ' + value;
            }
            
            if (value.length > 4) {
                value = value.substring(0, 4) + value.substring(4).replace(/(\d{3})(\d{3})(\d{2})/, '$1-$2-$3');
            }
            
            e.target.value = value;
        });
    });
}

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll events
window.addEventListener('scroll', debounce(function() {
    // Handle scroll events efficiently
}, 16));

// ===== ACCESSIBILITY =====
function handleKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Escape key closes modals
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
        
        // Tab key management for modals
        if (e.key === 'Tab') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                const focusableElements = activeModal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                if (focusableElements.length > 0) {
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    if (e.shiftKey && document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });
}

// Initialize keyboard navigation
handleKeyboardNavigation();

// ===== ANALYTICS =====
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track theme changes
function trackThemeChange(themeName) {
    trackEvent('User', 'Theme Change', themeName);
}

// Track form submissions
function trackFormSubmission(formType) {
    trackEvent('Form', 'Submit', formType);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    
    // Send error to analytics if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.error.message,
            'fatal': false
        });
    }
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== PWA INSTALL PROMPT =====
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button if you have one
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', function() {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function(choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                deferredPrompt = null;
            });
        });
    }
});

// ===== OFFLINE DETECTION =====
window.addEventListener('online', function() {
    document.body.classList.remove('offline');
    console.log('Back online');
});

window.addEventListener('offline', function() {
    document.body.classList.add('offline');
    console.log('Gone offline');
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'timing_complete', {
                    'name': 'load',
                    'value': loadTime
                });
            }
        }, 0);
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeCountdown();
    initializeFormHandling();
    initializeFAQ();
    initializeReviewsCarousel();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializePhoneFormatting();
    initializeLazyLoading();
    initializeMobileOptimizations(); // Add mobile optimizations
    
    // Mobile-specific initialization
    if (window.innerWidth < 768) {
        // Additional mobile-only initialization
        console.log('Mobile optimizations active');
        
        // Track mobile usage
        if (typeof gtag !== 'undefined') {
            gtag('event', 'mobile_init', {
                'custom_parameter': 'mobile_optimizations_loaded'
            });
        }
    }
});
