# Image Conversion Notes

The images in `assets/images/` are currently in HEIC format, which is not web-compatible.

## To display images on the website:

1. Convert HEIC files to JPG or PNG format
2. Place converted images in the `public/images/` directory:
   - `public/images/publicspeaker/` - for public speaking page images
   - `public/images/socialmedia/` - for social media page images

## Conversion Methods:

### Using macOS (built-in):
```bash
# Using sips (macOS built-in)
sips -s format jpeg assets/images/publicspeaker/IMG_4244.heic --out public/images/publicspeaker/IMG_4244.jpg
```

### Using ImageMagick:
```bash
# Install ImageMagick first: brew install imagemagick
magick convert assets/images/publicspeaker/IMG_4244.heic public/images/publicspeaker/IMG_4244.jpg
```

### Batch conversion script:
```bash
# Convert all publicspeaker images
for file in assets/images/publicspeaker/*.heic; do
  filename=$(basename "$file" .heic)
  sips -s format jpeg "$file" --out "public/images/publicspeaker/${filename}.jpg"
done

# Convert all socialmedia images
for file in assets/images/socialmedia/*.heic; do
  filename=$(basename "$file" .heic)
  sips -s format jpeg "$file" --out "public/images/socialmedia/${filename}.jpg"
done
```

## Image Naming:
- Public Speaking: IMG_4244.jpg, IMG_4245.jpg, IMG_4246.jpg, IMG_4247.jpg
- Social Media: IMG_4248.jpg through IMG_4267.jpg (20 images)
