# OKBench React Application

A modern, responsive React application for OKBench: Democratizing LLM Evaluation with Fully Automated, On-Demand Open Knowledge Benchmarking.

## 🚀 Features

- **Modern React 18** with functional components and hooks
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for beautiful, consistent icons
- **Intersection Observer** for scroll-triggered animations
- **Mobile-first responsive design**
- **Interactive leaderboard** with data visualization
- **Copy-to-clipboard** functionality for code examples
- **Smooth tab navigation** with animations

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Modern UI Improvements

### Visual Enhancements
- **Gradient backgrounds** and modern color schemes
- **Card-based layouts** with subtle shadows and borders
- **Smooth animations** and micro-interactions
- **Progress bars** for accuracy visualization
- **Ranking icons** (trophy, awards) for leaderboard
- **Hover effects** and scale transformations

### Responsive Design
- **Mobile-first approach** with breakpoint-based layouts
- **Flexible grid systems** that adapt to screen size
- **Collapsible mobile navigation** with hamburger menu
- **Optimized typography** for different screen sizes

### Interactive Features
- **Animated tab switching** with smooth transitions
- **Scroll-triggered animations** using Intersection Observer
- **Copy-to-clipboard** buttons for code examples
- **Interactive leaderboard** with sorting and filtering
- **Hover states** and visual feedback

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with mobile menu
│   ├── Hero.js            # Landing section with CTA buttons
│   ├── Overview.js        # Main content with research details
│   ├── Leaderboard.js     # Interactive results table
│   ├── Usage.js           # Installation and usage instructions
│   └── Footer.js          # Footer with links and branding
├── App.js                 # Main app component with routing
├── index.js               # React entry point
└── index.css              # Global styles with Tailwind
```

## 🎯 Key Components

### Header
- Sticky navigation with backdrop blur
- Mobile-responsive hamburger menu
- Smooth tab switching with animations

### Hero Section
- Gradient background with animated elements
- Call-to-action buttons with hover effects
- Feature highlights with icons and descriptions

### Overview
- Research paper content with modern typography
- Interactive comparison table
- Pipeline visualization with step-by-step breakdown
- News sources grid with hover effects
- Example QA pairs with clean formatting

### Leaderboard
- Interactive data table with sorting
- Progress bars for accuracy visualization
- Ranking system with trophy icons
- Date filtering functionality
- Statistics cards with key metrics

### Usage
- Code examples with syntax highlighting
- Copy-to-clipboard functionality
- Step-by-step installation guide
- Feature highlights with icons
- GitHub integration

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #2563eb)
- **Secondary**: Purple accent (#8b5cf6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)
- **Neutral**: Gray scale (#f9fafb to #111827)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)
- **Code**: Monaco/Menlo monospace

### Spacing
- **Container**: Max-width 1200px with responsive padding
- **Sections**: 4rem vertical spacing
- **Cards**: 1.5rem padding with rounded corners
- **Buttons**: 0.75rem vertical, 1.5rem horizontal padding

## 🚀 Performance Optimizations

- **Lazy loading** with React.lazy() for code splitting
- **Memoization** with useMemo for expensive calculations
- **Intersection Observer** for efficient scroll animations
- **Optimized images** with proper sizing and formats
- **Minimal bundle size** with tree shaking

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Development

The application uses modern React patterns:
- Functional components with hooks
- Context API for state management
- Custom hooks for reusable logic
- Error boundaries for error handling
- PropTypes for type checking

## 📄 License

This project is part of the OKBench research initiative. Please refer to the main project license for usage terms.
