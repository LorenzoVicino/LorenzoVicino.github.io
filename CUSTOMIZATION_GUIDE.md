# Portfolio Customization Guide

This guide will help you customize your Hexo Fluid portfolio with your personal information.

## Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Test your site locally**:
   ```bash
   npx hexo server
   ```
   Visit `http://localhost:4000` to see your site

3. **Build for production**:
   ```bash
   npx hexo generate
   ```

## Step-by-Step Customization

### 1. Basic Site Information

Edit `_config.yml` in the root directory:

```yaml
# Site
title: Your Name                          # Your name or site title
subtitle: 'Portfolio & Blog'              # Subtitle
description: 'Full Stack Developer | Software Engineer'  # SEO description
author: Your Name                         # Your name
language: en                              # Language (en, zh-CN, etc.)
timezone: ''                              # Your timezone (e.g., 'America/New_York')

# URL
url: https://yourwebsite.com              # Your website URL
```

### 2. Personal Information & Social Links

Edit `_config.fluid.yml`:

#### Navigation Bar
```yaml
navbar:
  blog_title: "Your Name"                 # Change to your name
```

#### Home Page Slogan
```yaml
index:
  slogan:
    text: "Your tagline here"             # Change your subtitle/tagline
```

#### About Page
```yaml
about:
  avatar: /img/avatar.png                 # Your profile photo path
  name: "Your Name"                       # Your name
  intro: "Your introduction"              # Brief introduction

  # Social links
  icons:
    - { class: "iconfont icon-github-fill", link: "https://github.com/yourusername", tip: "GitHub" }
    - { class: "iconfont icon-linkedin-fill", link: "https://linkedin.com/in/yourusername", tip: "LinkedIn" }
    - { class: "iconfont icon-twitter-fill", link: "https://twitter.com/yourusername", tip: "Twitter" }
    - { class: "iconfont icon-mail-fill", link: "mailto:your.email@example.com", tip: "Email" }
```

### 3. Add Your Profile Photo

1. Add your photo to `source/img/avatar.png`
2. Recommended size: 200x200px
3. Formats: PNG or JPG

### 4. Customize the About Page

Edit `source/about/index.md`:

- Update your name, background, and skills
- Add your education and certifications
- Update contact information
- Add your interests and hobbies

### 5. Add Your Projects

Edit `source/projects/index.md`:

For each project, update:
- Project name and description
- Technologies used
- Key features
- Links to live demo and GitHub repository

Example:
```markdown
### Project Name

**Description:** What your project does

**Technologies:** React, Node.js, MongoDB

**Features:**
- Feature 1
- Feature 2

**Links:**
- [Live Demo](https://your-demo.com)
- [GitHub](https://github.com/yourusername/project)
```

### 6. Add Banner Images

1. Add banner images to `source/img/`
2. Update banner image paths in `_config.fluid.yml`:

```yaml
index:
  banner_img: /img/your-banner.png

about:
  banner_img: /img/about-banner.png

page:
  banner_img: /img/default-banner.png
```

### 7. Write Blog Posts

Create new posts in `source/_posts/`:

```bash
# Create a new post (manually create the file)
# File: source/_posts/my-new-post.md
```

Post template:
```markdown
---
title: Post Title
date: 2025-11-01 10:00:00
tags:
  - tag1
  - tag2
categories:
  - Category Name
index_img: /img/post-cover.png
banner_img: /img/post-banner.png
---

Your post excerpt here...

<!-- more -->

Full post content here...
```

### 8. Customize Navigation Menu

Edit the menu in `_config.fluid.yml`:

```yaml
navbar:
  menu:
    - { key: "home", link: "/", icon: "iconfont icon-home-fill" }
    - { key: "about", link: "/about/", icon: "iconfont icon-user-fill" }
    - { key: "projects", name: "Projects", link: "/projects/", icon: "iconfont icon-code-fill" }
    - { key: "archive", link: "/archives/", icon: "iconfont icon-archive-fill" }
    # Add more menu items as needed
```

### 9. Customize Colors & Styling

Edit colors in `_config.fluid.yml` under the `color:` section:

```yaml
color:
  navbar_bg_color: "#2f4154"
  navbar_text_color: "#fff"
  # ... more color options
```

For advanced styling, create custom CSS:
1. Create `source/css/custom.css`
2. Add custom styles
3. Reference in `_config.fluid.yml`:
```yaml
custom_css:
  - /css/custom.css
```

### 10. Add Google Analytics (Optional)

In `_config.fluid.yml`:

```yaml
web_analytics:
  enable: true
  google:
    measurement_id: G-XXXXXXXXXX
```

## Available Icons

Find icons at: https://hexo.fluid-dev.com/docs/en/icon/

Common social icons:
- `iconfont icon-github-fill`
- `iconfont icon-linkedin-fill`
- `iconfont icon-twitter-fill`
- `iconfont icon-mail-fill`
- `iconfont icon-instagram-fill`
- `iconfont icon-facebook-fill`

## Testing Your Site

```bash
# Start local development server
npx hexo server

# Clean cache and regenerate
npx hexo clean && npx hexo generate

# Deploy to GitHub Pages (after setup)
npx hexo deploy
```

## Deployment

### GitHub Pages

1. Install deployer:
   ```bash
   npm install hexo-deployer-git --save
   ```

2. Edit `_config.yml`:
   ```yaml
   deploy:
     type: git
     repo: https://github.com/yourusername/yourusername.github.io
     branch: main
   ```

3. Deploy:
   ```bash
   npx hexo clean && npx hexo deploy
   ```

## Troubleshooting

### Site not displaying correctly
- Run `npx hexo clean` to clear cache
- Check that all paths start with `/` (e.g., `/img/avatar.png`)
- Verify `_config.yml` and `_config.fluid.yml` syntax (YAML is indent-sensitive)

### Images not showing
- Ensure images are in `source/img/` directory
- Check file paths and names (case-sensitive)
- Use absolute paths starting with `/img/`

### Theme not applying
- Verify `theme: fluid` is set in `_config.yml`
- Ensure Fluid theme is in `themes/fluid/` directory

## Resources

- [Hexo Documentation](https://hexo.io/docs/)
- [Fluid Theme Documentation](https://hexo.fluid-dev.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

## Need Help?

If you encounter issues:
1. Check the [Hexo Troubleshooting Guide](https://hexo.io/docs/troubleshooting.html)
2. Review the [Fluid Theme Issues](https://github.com/fluid-dev/hexo-theme-fluid/issues)
3. Ensure all configuration files use proper YAML syntax

---

Happy customizing! 🚀
