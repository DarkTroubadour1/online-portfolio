import React from 'react';
import importAllJsonFiles from '../utils/loadArticles';
import TileContainer from '../components/TileContainer'

function ArticleList() {
  const articles = importAllJsonFiles(require.context('../articles', false, /\.json$/));
  return (
    <div>
      <h2>Articles</h2>
      <TileContainer tiles={articles} routeFolder="article" />
    </div>
  );
}

const sectionStyle = {
  padding: '20px',
};

const sectionTitle = {
  fontSize: '2em',
  marginBottom: '20px',
  borderBottom: '2px solid #333',
  paddingBottom: '10px',
};

const contentStyle = {
  backgroundColor: '#1e1e1e',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '5px',
};

export default ArticleList;
