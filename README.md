# 📝 Todo List App

A simple, elegant, and functional todo list application built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Filter todos (All, Active, Completed)
- ✅ Clear all completed todos
- ✅ Persistent storage using localStorage
- ✅ Responsive design for mobile and desktop
- ✅ Beautiful gradient UI with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/friuns/create-todo-list-app.git
cd create-todo-list-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📦 Deployment

This project is configured to automatically deploy:

- **GitHub Pages**: Automatically deploys on push to `main` branch
- **Netlify**: Automatically deploys preview builds on pull requests

The deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## 🛠️ Technologies Used

- **Vite**: Fast build tool and dev server
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **CSS3**: Modern styling with gradients and animations
- **HTML5**: Semantic markup
- **LocalStorage**: Client-side data persistence

## 📱 Features in Detail

### Add Todos
Type your task in the input field and click "Add" or press Enter.

### Complete Todos
Click the checkbox next to a todo to mark it as complete.

### Delete Todos
Click the "Delete" button to remove a todo.

### Filter Todos
Use the filter buttons to view:
- **All**: All todos
- **Active**: Only incomplete todos
- **Completed**: Only completed todos

### Clear Completed
Click "Clear Completed" to remove all completed todos at once.

### Data Persistence
All todos are automatically saved to your browser's localStorage, so they persist across sessions.

## 🎨 Customization

You can customize the appearance by editing `style.css`:
- Change the gradient colors
- Modify spacing and sizing
- Adjust animations

## 📄 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using Vite
