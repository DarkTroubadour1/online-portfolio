import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Article = () => {
  const { slug } = useParams(); // This will get the slug from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Dynamically import the corresponding JSON file
    const fetchArticle = async () => {
      try {
        const articleData = await import(`../articles/${slug}.json`);
        setArticle(articleData);
      } catch (error) {
        console.error('Article not found:', error);
      }
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <div>{article.body}</div>
    </div>
  );
};

export default Article;
