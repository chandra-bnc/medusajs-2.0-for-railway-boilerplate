# BeeMax B2B Product Showcase Design Guide

## 🎨 Overall Brand Design System

### Color Palette
- **Primary Gold**: #E0B25C (BeeMax signature)
- **Deep Gold**: #D4A574 (Dubai chocolate)
- **Rich Brown**: #4A2C2A (Primary text)
- **Pistachio Green**: #90EE90 (Dubai accent)
- **Coral/Peach**: #FFB5A0 - #FFD4C9 (Lucky Bites)
- **Honey Tones**: #FFE4B5, #FFD700, #FFA500
- **Neutrals**: #F8F3EE (Ivory), #FFF8DC (Cream)

### Typography
- **Headlines**: 'Playfair Display' serif (Bold 700)
- **Subheadlines**: 'Playfair Display' serif (Italic 400)
- **Body Text**: System sans-serif
- **Small Text**: Light weight, increased letter-spacing

---

## 📦 Section 1: Lucky Bites Cones

### Layout & Structure
- **Background**: Gradient from soft coral (#FFB5A0) to light peach (#FFD4C9)
- **Layout**: 4-column horizontal card grid (responsive to 2 cols on tablet, 1 on mobile)
- **Card Style**: White cards with 90% opacity, backdrop blur, rounded corners (2xl)
- **Hover Effect**: Lift animation (-translateY-2) with enhanced shadow

### Visual Elements
- Decorative circles in corners (brown tones with low opacity)
- Sprinkle/cone piece abstract shapes
- Emoji placeholders for visual interest

### Image Specifications
- **Product Images**: 300x300px per SKU
- **Format**: PNG with transparent background preferred
- **Position**: Centered in colored background blocks

### Content Structure
```
LUCKY BITES COLLECTION (small caps, tracked)
Tiny Bites (main heading)
"Big flavor. Tiny cones." (italic tagline)
- 4 Flavors displayed horizontally
- Each with name, description, and size info
```

---

## 🏆 Section 2: Dubai Chocolate

### Layout & Structure
- **Background**: Rich textured gold gradient (#D4A574 → #F4E4C1 → #D4A574)
- **Layout**: Hero-style, full-width with centered content
- **Grid**: 2-column on desktop (product image | product info)

### Visual Elements
- Diagonal line pattern overlay (very subtle)
- Cocoa leaf accents (🍃) in corners
- Floating "NEW" badge with pistachio green background
- White card container with backdrop blur

### Image Specifications
- **Main Product Image**: 600x400px
- **Format**: High-res JPG/PNG
- **Content**: Show both packaged bar and broken pieces

### Content Structure
```
EXCLUSIVE CREATION (small caps, extra tracking)
Dubai Style (extra large heading, 6-7xl)
"Luxury in every layer." (italic tagline)
- Product features in pill-shaped badges
- Detailed description paragraph
```

---

## 🍯 Section 3: BeeMax Honey

### Layout & Structure
- **Background**: Gradient from honey gold (#FFE4B5) through white to cream (#FFF8DC)
- **Layout**: 3-column grid with equal spacing
- **Card Style**: Clean white cards with heavy shadow, extra padding

### Visual Elements
- Hexagonal SVG pattern overlay (very subtle)
- Circular frames for product images with gradient borders
- Honeycomb accent shapes on hover
- Product icons as placeholders

### Image Specifications
- **Product Images**: 400x400px each
- **Format**: PNG with transparent background
- **Styling**: Centered in circular frames

### Content Structure
```
PURE & NATURAL (small caps, tracked)
BeeMax Honey (main heading)
"From hive to table." (italic tagline)
- 3 Products: Jar, Squeeze, Bulk
- Each with name, size options, and description
```

---

## 🎯 Implementation Notes

### Responsive Behavior
- All sections stack vertically on mobile
- Card grids collapse to single column < 768px
- Typography scales down appropriately
- Decorative elements hidden on small screens

### Animation Details
- Hover lifts: transform: translateY(-2px to -3px)
- Shadow transitions: 300ms ease
- Gold shimmer effect on Dubai section
- Float animation available for accent elements

### Icon Suggestions
- **Lucky Bites**: Ice cream cone, chocolate chips, sprinkles
- **Dubai**: Premium badge, leaf accents, stars
- **Honey**: Hexagons, bees, honey drops

### Accessibility
- All decorative elements have aria-hidden="true"
- Proper heading hierarchy maintained
- Color contrast meets WCAG AA standards
- Focus states clearly visible

---

## 🚀 Quick Start for Developers

1. Replace placeholder images with actual product photos
2. Update product data arrays with real SKU information
3. Adjust colors in Tailwind classes if needed
4. Add click handlers for B2B ordering functionality
5. Consider lazy loading for images

The design is fully responsive and uses Tailwind CSS for easy customization.