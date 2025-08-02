# IPSTER - Multi-Theme Switcher App

A modern React TypeScript application that demonstrates theme switching capabilities with three distinct themes, each with unique layouts, fonts, and design approaches.

## 🎨 Features

### ✅ Implemented Requirements

#### Header
- ✅ Fixed top header with IPSTER logo/app name
- ✅ Dropdown to switch between themes (Theme 1 as default)
- ✅ Responsive navigation

#### Themes
- ✅ **Theme 1 (Minimalist)**: Light background with simple sans-serif font (Inter)
- ✅ **Theme 2 (Dark Sidebar)**: Dark mode with sidebar layout and bold serif font (Georgia)
- ✅ **Theme 3 (Colorful Grid)**: Colorful theme with card-based grid layout and playful Google Font (Pacifico)

#### Main Content
- ✅ Title, paragraph, and button components
- ✅ List/Card components with product data from FakeStore API
- ✅ Responsive layout for desktop and mobile
- ✅ Different layouts per theme (minimalist, sidebar, grid)

#### Functionality
- ✅ Theme persistence across page reload (localStorage)
- ✅ Context API for theme management
- ✅ Data fetching from `https://fakestoreapi.com/products`
- ✅ Responsive design using Tailwind CSS
- ✅ Subtle animations while switching themes
- ✅ React Router with multiple pages (Home, About, Contact)
- ✅ TypeScript implementation
- ✅ Security measures (input sanitization, form validation)
- ✅ Compatible with all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd multi-theme-switcher-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Context API** - State management
- **Vite** - Build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Fixed header with logo and theme switcher
│   ├── pages/
│   │   ├── Home.tsx        # Home page with theme-specific layouts
│   │   ├── About.tsx       # About page
│   │   └── Contact.tsx     # Contact page with form
│   └── theme/
│       ├── theme1.ts       # Minimalist theme
│       ├── theme2.ts       # Dark sidebar theme
│       └── theme3.ts       # Colorful grid theme
├── context/
│   └── ThemeContext.tsx    # Theme management with Context API
├── utils/
│   └── security.ts         # Security utilities
├── App.tsx                 # Main app component
└── main.tsx               # App entry point
```

## 🎯 Theme Differences

### Theme 1 - Minimalist
- Clean, simple design
- Light background (#ffffff)
- Inter font family
- Standard grid layout
- Subtle shadows and borders

### Theme 2 - Dark Sidebar
- Dark color scheme (#0f0f23)
- Georgia serif font
- Sidebar navigation layout
- Professional appearance
- Enhanced shadows for depth

### Theme 3 - Colorful Grid
- Vibrant color palette
- Pacifico cursive font
- Card-based grid layout
- Playful animations
- Gradient backgrounds

## 🔒 Security Features

- Input sanitization to prevent XSS attacks
- Form validation with error handling
- Email format validation
- Content Security Policy headers
- Secure form submission

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Animations

- Smooth theme transitions (0.5s duration)
- Fade-in animations for content
- Slide-in animations for cards
- Hover effects on interactive elements
- Loading spinners

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact us at hello@ipster.com
