// src/App.tsx
import HomePage from './pages/HomePage';

function App() {
  return (
    // Any future global providers (Redux, Context, Router) will wrap this
    <HomePage />
  );
}

export default App;