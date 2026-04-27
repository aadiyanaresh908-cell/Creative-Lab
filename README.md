#Features
Dynamic Category Filtering: Instantly sort projects by "Design" or "Development" using HTML5 data attributes without a page reload.

Relative Mouse-Tracking Effect: A high-precision "Glow" effect that follows the cursor, calculated relative to each card's specific coordinate system.

Glassmorphism UI: A clean, modern aesthetic utilizing backdrop-filter and transparency.

Performance Optimized: CSS-driven animations powered by JavaScript variables for 60fps smoothness.
#Technical Stack
HTML5: Semantic structure and data attributes.

CSS3: Custom properties (variables), Flexbox/Grid, and pointer-event management.

JavaScript (ES6+): Event listeners, getBoundingClientRect() for coordinate math, and DOM lifecycle management.
# Technical Logic
Coordinate MathTo ensure the glow effect stays perfectly centered regardless of screen size or scroll position, the cursor position is calculated locally within each card:$$x = \text{clientX} - \text{rect.left}$$$$y = \text{clientY} - \text{rect.top}$$
