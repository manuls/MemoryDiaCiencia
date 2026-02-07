# Memory: Mujeres en la Ciencia - Instrucciones para AI Agents

## 📚 Project Overview

**Memory: Mujeres en la Ciencia** is an interactive memory card game celebrating the International Day of Women and Girls in Science (February 11). The game teaches players about 10 prominent female scientists through gameplay—match card pairs to unlock biographical information, achievements, and images.

- **Tech Stack**: HTML5, vanilla CSS3 (no frameworks), vanilla JavaScript (no dependencies)
- **Target**: Educational/celebratory use - mobile, tablet, and desktop responsive
- **Current Features**: 20 cards (10 scientist pairs), modals for info/victory/instructions, touch optimization, Vercel Analytics

## 🏗️ Architecture & Key Patterns

### Data Flow
- **Single source of truth**: `scientists` array in [assets/js/main.js](assets/js/main.js#L11) (10 objects with id, name, dates, field, bio, achievement, image)
- **Game state** in module scope: `cards`, `flippedCards`, `matchedPairs`, `moves`, `isLocked`
- **Pairing logic**: Uses `scientist.id` equality to match cards—two cards with same `id` = pair

### DOM Architecture
- **HTML pages**: [index.html](index.html) (game), [about.html](about.html) (info)
- **CSS modular structure**: [styles.css](assets/css/styles.css) uses CSS custom properties (`:root` variables) organized by feature sections
- **No build step**: Serve files directly; referenced via relative paths (e.g., `images/Ada_Lovelace.png`)

### Component Structure (JavaScript)
Three main modal types + game board:
1. **Scientific Info Modal**: Triggered when pair matched or matched card clicked—shows scientist bio
2. **Victory Modal**: Shown after all 10 pairs matched—displays move count, inspirational message
3. **Instructions Modal**: Auto-shown on page load—explains gameplay
4. **Game Board**: Dynamically generated `div.card` elements from `scientists` array

## 💡 Developer Workflows

### Adding/Updating Scientists
1. Edit `scientists` array in [main.js](assets/js/main.js#L11)—add object with required fields (id, name, dates, field, bio, achievement, image)
2. Add image file to `images/` folder with matching filename (e.g., `NewScientist.png`)
3. Use `scientist.id` as unique identifier for pairing logic

### Styling Conventions
- **Color palette**: CSS variables in `:root` (primary: `#7C3AED`, secondary: `#EC4899`, accent: `#06B6D4`)
- **Responsive breakpoint**: `@media (min-width: 768px)` for desktop optimizations
- **Touch-friendly**: No small text; buttons use `clamp()` for scaling
- **Animations**: Use CSS `@keyframes` (fadeInDown, flip, etc.) + JavaScript `classList` toggles

### CSS Organization
- **Sections marked with comments**: Reset, Variables, Components (header, card, modal, buttons)
- **BEM-inspired naming**: `.card-face`, `.modal-overlay`, `.btn-primary`
- **No external CSS**: All styles in single file for portability

## 🔄 Event Handling Patterns

### Game Interaction
- **Touch & mouse support**: Separate `touchstart` listener (passive: false to prevent zoom) + `click` listener
- **Card click logic**: Check if card is `matched` (already paired) → show info; else → flip
- **State locking**: `isLocked` flag prevents rapid double-clicks during flip animation
- **Modal closure**: Click outside modal, click X button, or close button triggers `closeModal()`

### Key Functions
- `initGame()`: Reset state, shuffle cards (Fisher-Yates), rebuild DOM
- `flipCard(index)`: Add flipped class, push to `flippedCards` array
- `checkMatch()`: Compare `scientist.id` equality, mark `matched`, increment counters
- `handleInteraction(e)`: Unified touch/click handler—delegates to flip or showScientistInfo

## ⚙️ Technical Notes

### No Dependencies
- All CSS animations use native CSS3 (`transition`, `transform`, `@keyframes`)
- DOM manipulation only via `innerHTML`, `classList`, `appendChild`
- No fetch/async except Vercel Analytics (injected via script)

### Responsive Design
- Grid layout: 4 columns on desktop, 2-3 on tablet, 2 on mobile (CSS `@media`)
- Font sizes use `clamp()` for fluid scaling (e.g., `font-size: clamp(1.5rem, 5vw, 2.2rem)`)
- Touch prevention: Disable double-tap zoom, pinch zoom via `user-scalable=no` in viewport

### Image Handling
- **Path**: Relative paths (e.g., `images/Ada_Lovelace.png`) hardcoded in `scientists` data object
- **Format**: PNG assumed; referenced via `background-image` CSS property on `.card-image`, `.modal-image`
- **Size**: No optimization; server as-is (should optimize for mobile)

## 🐛 Common Modification Patterns

| Goal | File(s) | Pattern |
|------|---------|---------|
| Change colors | [styles.css](assets/css/styles.css#L10-L18) | Modify `:root` CSS variables |
| Add scientist | [main.js](assets/js/main.js#L11) | Add object to `scientists` array + add image to `images/` |
| Adjust card grid | [styles.css](assets/css/styles.css) | Find `.game-board` section, modify `grid-template-columns` |
| Change text/labels | [index.html](index.html), [about.html](about.html) | Edit HTML text directly |
| Fix modal styling | [styles.css](assets/css/styles.css) | Search `.modal` sections |

## 📝 Notes for AI Agents

- **Preserve modal toggle logic**: `classList.add('active')` / `classList.remove('active')` drives visibility—CSS opacity/display rules in `.modal-overlay.active`
- **Maintain card state consistency**: Always update both `cards[index].matched` flag AND add `matched` class to element
- **Fisher-Yates shuffle**: Used in `initGame()`—preserve algorithm if modifying card generation
- **Image paths**: Relative paths in `scientists` data—ensure images exist before deployment
- **Touch event preventDefault**: Critical on mobile—do not remove `{ passive: false }` from touchstart listeners
