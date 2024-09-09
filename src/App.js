import './App.css';
import MainPage from './pages/MainPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
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
