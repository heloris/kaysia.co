// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Hizmetler için daha fazla offset
            let offset = 80;
            if (this.getAttribute('href') === '#services') {
                offset = 300;
            }
            const offsetTop = target.offsetTop - offset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect - sticky navbar için gerekli değil, kaldırıldı

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.getAttribute('data-target'));
            if (statNumber.textContent === '0') {
                animateCounter(statNumber, target);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Gönderildi!';
        submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        submitButton.disabled = true;
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
    });
}

// Parallax effect removed - background is now fixed

// Add glow effect to cards on scroll
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach(card => {
    cardObserver.observe(card);
});

// Floating cards scroll animation
const floatingCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // Stagger animation
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.floating-card').forEach(card => {
    floatingCardObserver.observe(card);
});


// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .service-card.animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Animasyonlar azaltıldı
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Hero Button Particle Effects
document.querySelectorAll('.hero-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        const particles = this.querySelector('.particles');
        if (!particles) return;
        
        // Mevcut partikülleri temizle
        particles.innerHTML = '';
        
        // 5-8 arası rastgele partikül oluştur
        const particleCount = Math.floor(Math.random() * 4) + 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = i % 2 === 0 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)';
            particle.style.borderRadius = '50%';
            particle.style.boxShadow = '0 0 6px rgba(255, 255, 255, 0.8)';
            
            // Rastgele başlangıç pozisyonu
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            particle.style.left = startX + '%';
            particle.style.top = startY + '%';
            
            // Rastgele hareket yönü
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 20;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            // Animasyon
            particle.style.animation = `particleFloat ${1 + Math.random()}s ease-out ${Math.random() * 0.5}s forwards`;
            particle.style.setProperty('--end-x', endX + 'px');
            particle.style.setProperty('--end-y', endY + 'px');
            
            particles.appendChild(particle);
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        const particles = this.querySelector('.particles');
        if (particles) {
            setTimeout(() => {
                particles.innerHTML = '';
            }, 2000);
        }
    });
});

// Dinamik partikül animasyonu için CSS ekle
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
            background: rgba(255, 255, 255, 0.9);
        }
        30% {
            background: rgba(99, 102, 241, 0.8);
        }
        60% {
            background: rgba(139, 92, 246, 0.8);
        }
        100% {
            transform: translate(var(--end-x, 0), var(--end-y, 0)) scale(0);
            opacity: 0;
            background: rgba(139, 92, 246, 0.4);
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize Gradient Service Cards
(function() {
    const gradientCards = document.querySelectorAll('.gradient-service-card');
    
    gradientCards.forEach(card => {
        const gradientFrom = card.getAttribute('data-gradient-from');
        const gradientTo = card.getAttribute('data-gradient-to');
        
        if (gradientFrom && gradientTo) {
            const panels = card.querySelectorAll('.gradient-panel');
            panels.forEach(panel => {
                panel.style.background = `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`;
            });
        }
    });
})();

// Background Boxes Animation
(function() {
    const container = document.getElementById('background-boxes');
    if (!container) return;
    
    const rows = 150;
    const cols = 100;
    
    const colors = [
        "rgb(125 211 252)", // sky-300
        "rgb(249 168 212)", // pink-300
        "rgb(134 239 172)", // green-300
        "rgb(253 224 71)",  // yellow-300
        "rgb(252 165 165)", // red-300
        "rgb(216 180 254)", // purple-300
        "rgb(147 197 253)", // blue-300
        "rgb(165 180 252)", // indigo-300
        "rgb(196 181 253)", // violet-300
    ];
    
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };
    
    // Create boxes
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'box-row';
        
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'box-cell';
            
            // Add plus icon for even cells
            if (j % 2 === 0 && i % 2 === 0) {
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('stroke-width', '1.5');
                svg.setAttribute('stroke', 'currentColor');
                svg.style.cssText = 'position: absolute; height: 24px; width: 40px; top: -14px; left: -22px; color: rgba(51, 65, 85, 0.7); stroke-width: 1px; pointer-events: none;';
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('d', 'M12 6v12m6-6H6');
                
                svg.appendChild(path);
                cell.appendChild(svg);
            }
            
            // Add hover effect
            cell.addEventListener('mouseenter', function() {
                this.style.backgroundColor = getRandomColor();
            });
            
            cell.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 2000);
            });
            
            row.appendChild(cell);
        }
        
        container.appendChild(row);
    }
})();

// Siri Orb Animation (Ping-Pong / İleri-Geri)
(function() {
    const siriOrb = document.getElementById('siri-orb');
    if (!siriOrb) return;
    
    let angle = 0;
    let direction = 1; // 1 = ileri, -1 = geri
    const animationDuration = 20; // seconds (tek yön için)
    const fps = 60;
    const angleStep = 360 / (animationDuration * fps);
    
    function animate() {
        // Ping-pong mantığı: ileri-geri hareket
        angle += angleStep * direction;
        
        // 360'a ulaştığında veya geçtiğinde geriye dön
        if (angle >= 360) {
            angle = 360;
            direction = -1;
        }
        // 0'a ulaştığında veya geçtiğinde ileriye dön
        if (angle <= 0) {
            angle = 0;
            direction = 1;
        }
        
        // Update CSS custom property with different multipliers for each gradient layer
        siriOrb.style.setProperty('--angle', `${angle}deg`);
        
        // Update individual gradient rotations
        const style = document.createElement('style');
        style.id = 'siri-orb-dynamic';
        style.textContent = `
            .siri-orb::before {
                background:
                    conic-gradient(
                        from ${angle * 1.2}deg at 30% 65%,
                        var(--c3) 0deg,
                        transparent 45deg 315deg,
                        var(--c3) 360deg
                    ),
                    conic-gradient(
                        from ${angle * 0.8}deg at 70% 35%,
                        var(--c2) 0deg,
                        transparent 60deg 300deg,
                        var(--c2) 360deg
                    ),
                    conic-gradient(
                        from ${angle * -1.5}deg at 65% 75%,
                        var(--c1) 0deg,
                        transparent 90deg 270deg,
                        var(--c1) 360deg
                    ),
                    conic-gradient(
                        from ${angle * 2.1}deg at 25% 25%,
                        var(--c2) 0deg,
                        transparent 30deg 330deg,
                        var(--c2) 360deg
                    ),
                    conic-gradient(
                        from ${angle * -0.7}deg at 80% 80%,
                        var(--c1) 0deg,
                        transparent 45deg 315deg,
                        var(--c1) 360deg
                    ),
                    radial-gradient(
                        ellipse 120% 80% at 40% 60%,
                        var(--c3) 0%,
                        transparent 50%
                    );
            }
        `;
        
        const existingStyle = document.getElementById('siri-orb-dynamic');
        if (existingStyle) {
            existingStyle.remove();
        }
        document.head.appendChild(style);
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Add click interaction
    const maskot = document.getElementById('siri-orb-maskot');
    if (maskot) {
        maskot.addEventListener('click', () => {
            // Open AI chat
            const chatContainer = document.getElementById('ai-chat-container');
            if (chatContainer) {
                chatContainer.classList.add('active');
                // Focus input
                setTimeout(() => {
                    const input = document.getElementById('ai-chat-input');
                    if (input) input.focus();
                }, 300);
            }
        });
    }
})();

// AI Assistant Chat
(function() {
    const chatContainer = document.getElementById('ai-chat-container');
    const chatClose = document.getElementById('ai-chat-close');
    const chatForm = document.getElementById('ai-chat-form');
    const chatInput = document.getElementById('ai-chat-input');
    const chatMessages = document.getElementById('ai-chat-messages');
    const chatSend = document.getElementById('ai-chat-send');
    const chatSendIcon = document.getElementById('ai-chat-send-icon');
    const chatLoading = document.getElementById('ai-chat-loading');
    
    if (!chatContainer || !chatForm || !chatInput || !chatMessages) return;
    
    let messages = [];
    let messageCount = 0;
    let isFirstOpen = true;
    const whatsappNumber = "905551234567"; // WhatsApp numarasını buraya ekleyin
    const whatsappMessage = "Merhaba! Cekai Studio hizmetleri hakkında bilgi almak istiyorum.";
    
    // İlk açılışta karşılama mesajı gönder
    const sendWelcomeMessage = () => {
        if (isFirstOpen) {
            isFirstOpen = false;
            setTimeout(() => {
                const emptyState = chatMessages.querySelector('.ai-chat-empty');
                if (emptyState) {
                    emptyState.remove();
                }
                addMessage("Merhaba! Cekai Studio'ya hoş geldiniz! 👋\n\nSize nasıl yardımcı olabilirim? Hizmetlerimiz, projelerimiz veya fiyatlandırma hakkında sorularınızı yanıtlayabilirim.", false);
            }, 500);
        }
    };
    
    // Chat açıldığında karşılama mesajını gönder
    const observer = new MutationObserver((mutations) => {
        if (chatContainer.classList.contains('active')) {
            sendWelcomeMessage();
        }
    });
    
    observer.observe(chatContainer, {
        attributes: true,
        attributeFilter: ['class']
    });
    
    // Karşılama mesajları
    const greetings = [
        "Merhaba! Cekai Studio'ya hoş geldiniz! Size nasıl yardımcı olabilirim?",
        "Selam! Dijital dönüşüm yolculuğunuzda yanınızdayız. Hangi konuda destek almak istersiniz?",
        "Hoş geldiniz! Web tasarım, sosyal medya yönetimi veya dijital pazarlama konularında sorularınızı yanıtlayabilirim.",
        "Merhaba! Projeleriniz için modern çözümler sunuyoruz. Size nasıl yardımcı olabilirim?"
    ];
    
    // AI yanıtları
    const getAIResponse = (userMessage) => {
        const msg = userMessage.toLowerCase().trim();
        
        if (msg.includes("merhaba") || msg.includes("selam") || msg.includes("hey")) {
            return greetings[Math.floor(Math.random() * greetings.length)];
        } else if (msg.includes("hizmet") || msg.includes("ne yapıyorsunuz") || msg.includes("servis")) {
            return "Cekai Studio olarak web tasarım, sosyal medya yönetimi, dijital pazarlama, e-ticaret çözümleri ve danışmanlık hizmetleri sunuyoruz. Hangi konuda daha detaylı bilgi almak istersiniz?";
        } else if (msg.includes("fiyat") || msg.includes("ücret") || msg.includes("maliyet") || msg.includes("ne kadar")) {
            return "Projeleriniz için özel fiyatlandırma yapıyoruz. Detaylı bilgi ve teklif almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz!";
        } else if (msg.includes("iletişim") || msg.includes("telefon") || msg.includes("email") || msg.includes("adres")) {
            return "Bizimle iletişime geçmek için WhatsApp üzerinden mesaj gönderebilirsiniz. Size en kısa sürede dönüş yapacağız!";
        } else if (msg.includes("proje") || msg.includes("çalışma") || msg.includes("portfolio")) {
            return "Tamamladığımız projeleri görmek için 'İşlerimiz' bölümüne göz atabilirsiniz. Benzer bir proje için WhatsApp üzerinden detaylı görüşme yapabiliriz!";
        } else if (msg.includes("teşekkür") || msg.includes("sağol") || msg.includes("eyvallah")) {
            return "Rica ederim! Başka bir sorunuz varsa çekinmeyin. Daha detaylı görüşme için WhatsApp üzerinden iletişime geçebilirsiniz.";
        } else if (msg.includes("whatsapp") || msg.includes("mesaj") || msg.includes("görüşme")) {
            return "Harika! Size WhatsApp üzerinden ulaşabilirsiniz. Hemen yönlendiriyorum...";
        } else {
            return "Anladım! Bu konuda size daha iyi yardımcı olabilmem için WhatsApp üzerinden detaylı görüşme yapabiliriz. Size hemen yönlendireyim mi?";
        }
    };
    
    // Mesaj ekle
    const addMessage = (text, isUser) => {
        messages.push({ text, isUser });
        messageCount++;
        
        // Empty state'i kaldır
        const emptyState = chatMessages.querySelector('.ai-chat-empty');
        if (emptyState) {
            emptyState.remove();
        }
        
        // Mesaj bubble oluştur
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${isUser ? 'user' : 'assistant'}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'ai-message-bubble';
        bubble.textContent = text;
        
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    
    // Typing indicator göster
    const showTyping = () => {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message assistant';
        typingDiv.id = 'typing-indicator';
        
        const bubble = document.createElement('div');
        bubble.className = 'ai-message-bubble';
        
        const dots = document.createElement('div');
        dots.className = 'ai-typing-indicator';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'ai-typing-dot';
            dots.appendChild(dot);
        }
        
        bubble.appendChild(dots);
        typingDiv.appendChild(bubble);
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    
    // Typing indicator kaldır
    const hideTyping = () => {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    };
    
    // WhatsApp'a yönlendir
    const redirectToWhatsApp = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };
    
    // Form submit
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;
        
        // Kullanıcı mesajını ekle
        addMessage(userMessage, true);
        chatInput.value = '';
        chatSend.disabled = true;
        chatSendIcon.style.display = 'none';
        chatLoading.style.display = 'block';
        
        // Typing göster
        showTyping();
        
        // AI yanıtını simüle et
        setTimeout(() => {
            hideTyping();
            const aiResponse = getAIResponse(userMessage);
            addMessage(aiResponse, false);
            
            chatSend.disabled = false;
            chatSendIcon.style.display = 'block';
            chatLoading.style.display = 'none';
            
            // 3 mesajdan sonra WhatsApp'a yönlendir
            if (messageCount >= 6) { // 3 kullanıcı + 3 AI = 6 mesaj
                setTimeout(() => {
                    addMessage("Daha detaylı görüşme için WhatsApp üzerinden devam edelim mi?", false);
                    setTimeout(() => {
                        redirectToWhatsApp();
                    }, 2000);
                }, 1000);
            }
        }, 1500);
    });
    
    // Close chat
    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });
    }
    
    // Input focus/blur
    chatInput.addEventListener('focus', () => {
        chatForm.classList.add('focused');
    });
    
    chatInput.addEventListener('blur', () => {
        chatForm.classList.remove('focused');
    });
    
    // Enter tuşu ile gönder
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });
})();

// Sparkles Animation for Works Section
(function() {
    let particlesInitialized = false;
    
    function initSparkles() {
        if (particlesInitialized) return;
        
        const container = document.getElementById('sparkles-container');
        if (!container) {
            setTimeout(initSparkles, 100);
            return;
        }
        
        if (typeof tsParticles === 'undefined' || !tsParticles.load) {
            setTimeout(initSparkles, 100);
            return;
        }
        
        const worksSection = document.querySelector('.works');
        if (!worksSection) return;
        
        const options = {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fullScreen: {
                enable: false,
                zIndex: 1,
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                move: {
                    enable: true,
                    direction: "none",
                    speed: {
                        min: 0.1,
                        max: 1,
                    },
                    straight: false,
                },
                number: {
                    value: 800,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 1,
                    },
                    animation: {
                        enable: true,
                        sync: false,
                        speed: 3,
                    },
                },
                size: {
                    value: {
                        min: 0.4,
                        max: 1,
                    },
                },
                shape: {
                    type: "circle",
                },
            },
            detectRetina: true,
        };
        
        // Set container ID for tsparticles
        container.id = "sparkles-particles";
        
        tsParticles.load({
            id: "sparkles-particles",
            element: container,
            options: options
        }).then((instance) => {
            particlesInitialized = true;
            console.log('Sparkles particles loaded successfully');
        }).catch((error) => {
            console.error('Error loading sparkles particles:', error);
            // Fallback: try alternative API
            try {
                tsParticles.load("sparkles-particles", options).then(() => {
                    particlesInitialized = true;
                });
            } catch (e) {
                console.error('Fallback also failed:', e);
            }
        });
    }
    
    // Wait for page to load and tsparticles to be available
    function tryInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(initSparkles, 500);
            });
        } else {
            setTimeout(initSparkles, 500);
        }
    }
    
    tryInit();
    
    // Also try when window loads (in case tsparticles loads late)
    window.addEventListener('load', () => {
        setTimeout(initSparkles, 500);
    });
})();

