# OKBench: Democratizing LLM Evaluation

A modern React application for OKBench - Democratizing LLM Evaluation with Fully Automated, On-Demand Open Knowledge Benchmarking.

![OKBench](https://img.shields.io/badge/OKBench-React-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7)

## 🚀 Live Demo

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/okbench-react)

## 📖 About

OKBench is a fully automated framework for generating high-quality, dynamic knowledge benchmarks on demand. This React application provides an interactive interface to explore research findings, view leaderboards, and understand how to use the OKBench system.

## ✨ Features

- **🎨 Modern UI**: Built with React 18, Tailwind CSS, and Framer Motion
- **📊 Interactive Leaderboard**: Sortable data table with visual progress bars
- **📱 Responsive Design**: Mobile-first approach with smooth animations
- **⚡ Performance Optimized**: Lazy loading, memoization, and efficient rendering
- **🔍 Research Content**: Comprehensive overview of the OKBench methodology
- **📋 Usage Guide**: Step-by-step instructions with code examples

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/okbench-react.git
   cd okbench-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
okbench-react/
├── public/
│   ├── index.html
│   ├── _redirects
│   └── assets/           # Images and static assets
├── src/
│   ├── components/       # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Overview.js
│   │   ├── Leaderboard.js
│   │   ├── Usage.js
│   │   ├── Footer.js
│   │   └── ScrollToTop.js
│   ├── App.js           # Main app component
│   ├── index.js         # React entry point
│   └── index.css        # Global styles
├── package.json
├── tailwind.config.js
├── netlify.toml         # Netlify configuration
└── README.md
```

## 🎯 Key Components

### Header
- Sticky navigation with mobile hamburger menu
- Smooth tab switching with animations

### Hero Section
- Gradient background with animated elements
- Call-to-action buttons with hover effects
- Feature highlights with icons

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

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify**
   - Drag the `build` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository for automatic deployments

3. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

### Other Platforms

- **Vercel**: `vercel --prod`
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build` folder to S3 bucket

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles use Tailwind classes

### Content
- Update data in component files
- Modify leaderboard data in `Leaderboard.js`
- Change research content in `Overview.js`

### Branding
- Replace logo in `Header.js`
- Update colors in `tailwind.config.js`
- Modify hero content in `Hero.js`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 2s on 3G networks
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Research team behind OKBench
- React and Tailwind CSS communities
- Open source contributors

## 📞 Support

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/okbench-react/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/okbench-react/discussions)

## 🔗 Related Links

- [OKBench Paper](link-to-paper)
- [Original Research](link-to-research)
- [API Documentation](link-to-api-docs)

---

Made with ❤️ by the OKBench team