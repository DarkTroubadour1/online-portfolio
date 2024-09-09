import './App.css';
import MainPage from './pages/MainPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './pages/Article';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ArticleList from './pages/ArticleList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for each section */}
          <Route
            path="/"
            element={
              <MainPage>
                <About />
              </MainPage>
            }
          />
          <Route
            path="/projects"
            element={
              <MainPage>
                <Projects />
              </MainPage>
            }
          />
          <Route
            path="/articles"
            element={
              <MainPage>
                <ArticleList />
              </MainPage>
            }
          />
          <Route
            path="/contact"
            element={
              <MainPage>
                <Contact />
              </MainPage>
            }
          />
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
