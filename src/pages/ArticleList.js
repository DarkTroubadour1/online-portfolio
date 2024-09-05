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

export default ArticleList;
