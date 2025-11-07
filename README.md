# Lorenzo Vicino - Portfolio Website

A modern, fast, and SEO-optimized portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark mode support
- **Fast Loading**: Optimized for performance with minimal dependencies
- **SEO Optimized**: Proper meta tags, sitemap, and semantic HTML
- **Interactive**: Particles background animation and smooth transitions
- **Accessible**: Semantic HTML and proper ARIA labels
- **Mobile-First**: Fully responsive design

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **JavaScript (ES6+)**: Vanilla JS for interactions
- **Tailwind CSS**: Utility-first CSS framework (via CDN)

## 📁 Project Structure

```
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects showcase
├── blog.html           # Blog posts
├── 404.html            # Custom 404 page
├── css/
│   └── style.css       # Custom styles
├── js/
│   ├── main.js         # Main JavaScript
│   └── particles.js    # Particles animation
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine instructions
```

## 🎨 Key Features

### Dark Mode
Automatic theme detection with manual toggle. Theme preference is saved in localStorage.

### Particles Animation
Interactive particle system with mouse interaction for visual appeal.

### SEO Optimized
- Semantic HTML5
- Meta tags for social sharing (Open Graph)
- XML sitemap
- robots.txt
- Fast page load times

### Performance
- Minimal JavaScript
- CSS optimizations
- Lazy loading where applicable
- Efficient animations

## 🚀 Deployment

This site is designed to be deployed on **GitHub Pages**.

### To Deploy:

1. Push changes to the `main` branch
2. GitHub Pages will automatically serve the site from the root directory

### Local Development:

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📝 Content Sections

### Home Page
- Hero section with typing animation
- Quick about section
- Featured projects
- Tech stack showcase

### About Page
- Personal introduction
- Skills and technologies
- Current focus areas
- Contact information

### Projects Page
- Project showcase with descriptions
- Technologies used
- GitHub links
- Current learning section

### Blog Page
- Blog posts
- Technical articles
- Thoughts on development

## 🎯 Customization

### Colors
Main theme color is defined in Tailwind config:
```javascript
primary: '#60a5fa'
```

### Content
Update the HTML files directly to change content. All content is static for maximum performance.

### Animations
Particles animation can be configured in `js/particles.js`:
- Number of particles
- Animation speed
- Connection distance
- Colors

## 📊 Performance Optimizations

- ✅ Minimal external dependencies
- ✅ CDN for Tailwind CSS
- ✅ Optimized animations with RequestAnimationFrame
- ✅ Lazy loading for images
- ✅ Efficient event handlers
- ✅ Animation pausing when tab is not visible

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsive

Fully responsive design with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Connect

- **GitHub**: [LorenzoVicino](https://github.com/LorenzoVicino)
- **LinkedIn**: [Lorenzo Vicino](https://linkedin.com/in/lorenzo-vicino-9152871aa)
- **Website**: [lorenzovicino.github.io](https://lorenzovicino.github.io)

## 📄 License

© 2025 Lorenzo Vicino. All rights reserved.

---

**Built with ❤️ using HTML, CSS & JavaScript**