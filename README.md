# Remotion Studio Pro

Professional video production studio built with [Remotion](https://www.remotion.dev/) - React-powered programmatic video creation.

## Features

### 7 Compositions Ready to Use

| Composition | Resolution | Duration | Description |
|---|---|---|---|
| **CinematicIntro** | 1920x1080 | 5s | Gradient backgrounds, particles, animated text |
| **KineticTypography** | 1920x1080 | 6s | Dynamic text with spring physics |
| **DataVisualization** | 1920x1080 | 8s | Animated bar charts, data-driven |
| **FeatureShowcase** | 1920x1080 | 10s | Product feature cards with stagger |
| **SocialReel** | 1080x1920 | 5s | Vertical format (Instagram/TikTok) |
| **SocialReelSquare** | 1080x1080 | 5s | Square format for social media |
| **Outro** | 1920x1080 | 4s | Closing scene with CTA |

### Architecture

```
src/
├── components/
│   ├── animations/    # FadeIn, ScaleIn, ProgressBar
│   ├── effects/       # Particles, GlowOrb
│   ├── layout/        # GradientBackground, CenterStack
│   └── typography/    # AnimatedText, SplitText
├── hooks/             # useAnimatedValue, useTypewriter, useStagger, useParallax
├── scenes/            # Each composition in its own folder
├── types/             # Zod schemas for type-safe props
├── utils/             # Easing, colors, math utilities
└── Root.tsx           # Composition registry
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/flujopy2025-beep/remotion-.git
cd remotion-
npm install
```

### Development (Visual Preview)

```bash
npm run dev
```

Opens Remotion Studio at `http://localhost:3000` with:
- Real-time preview of all compositions
- Timeline scrubbing
- Input props editor
- Hot module reload

### Render Videos

```bash
# Render a specific composition
npx remotion render src/index.ts CinematicIntro out/intro.mp4

# Render with custom props
npx remotion render src/index.ts CinematicIntro out/intro.mp4 --props='{"title":"My Title","subtitle":"My Subtitle"}'

# Render as GIF
npx remotion render src/index.ts CinematicIntro out/intro.gif

# Render a single frame (thumbnail)
npx remotion still src/index.ts CinematicIntro out/thumbnail.png --frame=45

# Render social media formats
npx remotion render src/index.ts SocialReel out/reel.mp4
npx remotion render src/index.ts SocialReelSquare out/square.mp4
```

### Render All Compositions

```bash
npm run render:all
```

## Customization

### Input Props (via Remotion Studio or CLI)

Each composition accepts customizable props defined with Zod schemas:

- **CinematicIntro**: `title`, `subtitle`, `accentColor`
- **KineticTypography**: `words`, `accentColor`
- **DataVisualization**: `title`, `dataPoints` (array with label, value, color)
- **FeatureShowcase**: `title`, `features` (array with icon, title, description)
- **SocialReel**: `headline`, `subtext`, `accentColor`
- **Outro**: `message`, `ctaText`, `accentColor`

### Adding New Scenes

1. Create a new folder in `src/scenes/your-scene/`
2. Build your component using the reusable building blocks from `src/components/`
3. Define a Zod schema in `src/types/index.ts`
4. Register it in `src/Root.tsx`

## Tech Stack

- **Remotion 4.x** - React video framework
- **TypeScript** - Type safety
- **Zod** - Runtime schema validation for props
- **@remotion/transitions** - Scene transitions
- **@remotion/noise** - Perlin noise for organic animations
- **@remotion/paths** - SVG path animations
- **@remotion/motion-blur** - Motion blur effects

## License

MIT
