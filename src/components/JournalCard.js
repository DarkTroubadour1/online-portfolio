import React from 'react';
import { Link } from 'react-router-dom';

function JournalCard({ title, slug, postedDate, description }) {
  return (
    <article className="journal-article">
      <Link to={`/journal/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p><small>Posted on {postedDate}</small></p>
      <p>{description}</p>
      <Link to="/journal-detail" className="read-more">Read More &raquo;</Link>
    </article>
  );
}

export default JournalCard;
