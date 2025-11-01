# Image Directory

Place your images in this directory to use them in your portfolio.

## Required Images

To fully customize your portfolio, add these images:

1. **avatar.png** - Your profile photo (recommended size: 200x200px)
2. **default.png** - Default banner image (recommended size: 1920x1080px)
3. **loading.gif** - Loading animation for lazy loading

## Where to Use Images

### Profile Photo
- Location: `source/img/avatar.png`
- Used in: About page, comments section
- Configure in: `_config.fluid.yml` under `about.avatar`

### Banner Images
- Location: `source/img/`
- Used in: Page headers, post covers
- Configure per page in front-matter or globally in `_config.fluid.yml`

### Post Images
- Location: `source/img/posts/`
- Use in posts with: `![Alt text](/img/posts/image.png)`

## Image Optimization Tips

1. Compress images before uploading (use tools like TinyPNG)
2. Use appropriate formats:
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for better compression (modern browsers)
3. Use descriptive filenames: `project-portfolio-screenshot.png`

## Example Usage in Markdown

```markdown
![Project Screenshot](/img/posts/project-screenshot.png)
```

## External Images

You can also use external image URLs:

```markdown
![External Image](https://example.com/image.png)
```
