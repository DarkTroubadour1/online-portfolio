import React from 'react';
import './JournalEntry.css';
import journalsData from '../journal/journalData';
import { useParams, Link } from 'react-router-dom';

function JournalEntry() {
  const { slug } = useParams();
  const journal = journalsData.find(j => j.slug === slug);
  const JournalEntryComponent = journal.component;

  if (!journal) {
    return (
      <div>
        <h2>404 - Journal Not Found</h2>
        <p>It seems the journal you’re looking for has gone on a vacation—permanently!</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div class="center-justified">
      <h2>{journal.title}</h2>
      <JournalEntryComponent />
    </div>
  );
}

export default JournalEntry;
