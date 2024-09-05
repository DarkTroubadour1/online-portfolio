import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main container for sections */}
          <Route path="/article/:slug" element={<Article />} /> {/* Route to individual articles */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
