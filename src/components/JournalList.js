import React from 'react';
import JournalCard from './JournalCard';

function JournalList({ journals }) {
  return (
    <section id="tech-journals" className="tech-journals-section">
      <h2>Tech Journals</h2>
      
      {journals.map((journal, index) => (
        <JournalCard 
          key={index} 
          slug={journal.slug}
          title={journal.title} 
          postedDate={journal.postedDate} 
          description={journal.description} 
        />
      ))}
    </section>
  );
}

export default JournalList;
