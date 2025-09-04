# Kaysia.co — Modern Landing Page

Modern, responsive landing page for Kaysia Agency with theme system, forms, and Turkish language support.

## 🌟 Features

### Core Functionality
- **Single Page Application** - All sections on one page with smooth scrolling
- **Turkish Language** - Full Turkish content and localization
- **Mobile-First Design** - Responsive design for all devices
- **Theme System** - 10 different color themes with localStorage persistence
- **Weekly Countdown Timer** - Automatic reset every Monday (Europe/Istanbul timezone)
- **Form Integration** - Formspree integration for contact forms

### Sections
1. **Hero** - Main headline with CTA buttons
2. **Weekly Countdown** - Special offers countdown timer
3. **Packages** - .com and .com.tr pricing with features
4. **Features** - 3 key service highlights
5. **FAQ** - 10 frequently asked questions with accordion
6. **Reviews** - Customer testimonials carousel (10 reviews)
7. **Application Form** - Contact form for web design requests
8. **Contact & Location** - Business information and map placeholder
9. **Themes** - 10 selectable color themes
10. **News** - Placeholder for future RSS integration
11. **Buy Section** - Detailed project form
12. **Footer** - Links, legal info, and company details

### Technical Features
- **Google Analytics 4** - Full tracking integration
- **WhatsApp Integration** - Fixed WhatsApp button with direct messaging
- **Form Validation** - Real-time form validation and submission
- **Modal System** - KVKK and Privacy policy modals
- **Performance Optimized** - Lazy loading, debounced scroll handlers
- **Accessibility** - ARIA labels, focus management, keyboard navigation

## 🎨 Theme System

### Available Themes
1. **Kaysia Light** - Blue/Indigo + light background
2. **Kaysia Dark** - Dark anthracite + accent blue
3. **Turkuaz** - Turquoise + charcoal
4. **Günbatımı** - Orange/red + cream
5. **Zeytin** - Olive green + beige
6. **Mor Gece** - Purple/lavender + dark gray
7. **Brütal** - Black/white high contrast
8. **Pastel** - Soft pastel tones
9. **Monokrom** - Gray tones minimal
10. **Neon** - Neon accent + dark background

### Theme Features
- **Instant Application** - Click any theme to apply immediately
- **Persistent Storage** - Theme choice saved in localStorage
- **Smooth Transitions** - CSS transitions for theme changes
- **Preview Cards** - Visual preview of each theme

## 📱 Responsive Design

### Breakpoints
- **Desktop** - 1200px+ (full layout)
- **Tablet** - 768px-1199px (adjusted grid layouts)
- **Mobile** - 320px-767px (single column, optimized spacing)

### Mobile Features
- **Touch-Friendly** - Large buttons and form elements
- **Optimized Navigation** - Collapsible mobile menu
- **Responsive Typography** - Scalable text sizes
- **Mobile-First Forms** - Optimized form layouts

## 🔧 Technical Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern CSS with custom properties and Grid/Flexbox
- **Vanilla JavaScript** - No frameworks, optimized performance
- **CSS Variables** - Dynamic theming system

### Integrations
- **Formspree** - Form handling and email delivery
- **Google Analytics 4** - Website analytics and tracking
- **WhatsApp Business** - Direct customer communication

### Performance
- **Lazy Loading** - Images load when needed
- **Debounced Events** - Optimized scroll and resize handlers
- **CSS Transitions** - Hardware-accelerated animations
- **Minimal Dependencies** - No external libraries

## 📋 Form Specifications

### Main Application Form
- **Endpoint**: `https://formspree.io/f/xdkloppk`
- **Fields**: Name, Email, Phone, Project Type, Project Details, KVKK Consent
- **Validation**: Real-time validation with visual feedback
- **Submission**: AJAX submission with success/error handling

### Courier Application Form
- **Endpoint**: `https://formspree.io/f/xqadlokb`
- **Page**: `/kurye` (separate page)
- **Fields**: Personal info, license details, contact info, address, experience
- **Special Features**: Phone format validation (5xx-xxx-xx-xx), P1 checkbox

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server for development (optional)

### Installation
1. Clone or download the project files
2. Ensure all assets are in the correct directory structure
3. Open `index.html` in a web browser

### File Structure
```
kaysia.co/
├── index.html          # Main landing page
├── kurye.html          # Courier application page
├── styles.css          # Main stylesheet with theme system
├── script.js           # JavaScript functionality
├── logo.png            # Company logo
├── favicon.png         # Website favicon
├── kaysia.png          # Additional logo variant
├── agency.png          # Agency branding image
└── README.md           # This documentation
```

## 🎯 Customization

### Adding New Themes
1. Add new theme variables in `styles.css`
2. Create theme preview in HTML
3. Add theme data attribute
4. Update theme system in JavaScript

### Modifying Content
- **Text Content**: Edit HTML files directly
- **Styling**: Modify CSS variables and classes
- **Functionality**: Update JavaScript functions
- **Forms**: Update Formspree endpoints

### Adding New Sections
1. Create HTML structure
2. Add CSS styling
3. Implement JavaScript functionality if needed
4. Update navigation links

## 📊 Analytics & Tracking

### Google Analytics 4
- **Measurement ID**: `G-CYM7YXN4S0`
- **Tracking**: Page views, form submissions, theme changes
- **Events**: Custom events for user interactions

### Form Tracking
- **Submission Tracking** - Monitor form completion rates
- **Field Analytics** - Track form field usage
- **Conversion Tracking** - Measure lead generation

## 🔒 Privacy & Compliance

### KVKK Compliance
- **Data Processing** - Personal data handling information
- **User Rights** - Information about user data rights
- **Consent Management** - Explicit consent collection
- **Data Security** - Secure form submission

### Privacy Policy
- **Cookie Usage** - Information about website cookies
- **Data Collection** - What data is collected and why
- **Third-Party Services** - Information about external services
- **Contact Information** - How to reach regarding privacy

## 🌐 Browser Support

### Supported Browsers
- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+

### Feature Support
- **CSS Grid** - Modern layout system
- **CSS Variables** - Dynamic theming
- **ES6+ JavaScript** - Modern JavaScript features
- **Intersection Observer** - Lazy loading support

## 📈 Performance Metrics

### Target Scores (Lighthouse)
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

### Optimization Techniques
- **Image Optimization** - Compressed PNG files
- **CSS Optimization** - Efficient selectors and properties
- **JavaScript Optimization** - Debounced events, efficient DOM queries
- **Font Optimization** - System font stack for fast loading

## 🚧 Development Notes

### Known Issues
- None currently identified

### Future Enhancements
- **RSS Integration** - News section with real content
- **Blog System** - Content management for news
- **Multi-language Support** - English and other languages
- **Advanced Analytics** - Custom dashboard and reporting

### Testing
- **Cross-browser Testing** - Tested on major browsers
- **Mobile Testing** - Tested on various mobile devices
- **Performance Testing** - Lighthouse audits
- **Accessibility Testing** - Screen reader compatibility

## 📞 Support & Contact

### Technical Support
- **Email**: kaysia.store@gmail.com
- **Phone**: +90 530 561 6747
- **Website**: kaysia.co

### Development Team
- **Frontend Development** - Kaysia Agency
- **Design** - Modern, clean aesthetic
- **Content** - Turkish language content
- **Testing** - Cross-platform compatibility

## 📄 License

This project is proprietary software developed by Kaysia Agency. All rights reserved.

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Production Ready
