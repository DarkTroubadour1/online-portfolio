import './App.css';
import MainPage from './pages/MainPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* MainPage handles all the section rendering */}
          <Route path="/" element={<MainPage />} />

          {/* Article page is wrapped by MainPage, keeping Header/Nav consistent */}
          <Route
            path="/article/:slug"
            element={
              <MainPage>
                <Article />
              </MainPage>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
