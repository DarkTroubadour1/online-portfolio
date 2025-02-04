import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import JournalList from '../components/JournalList';
import project1Image from '../assets/ISpec_project.webp';
import project2Image from '../assets/warm_1.jpg';
import journalsData from '../journal/journalData';

import React, { useState } from 'react';

function MainPage({ children }) {
  const [projects] = useState([
    {
      title: 'ISpecification Pattern',
      description: 'My variation of the ISpecification Pattern for CRUD operations and more',
      linkText: 'View on GitHub',
      link: 'https://github.com/DarkTroubadour1/Specification',
      image: project1Image,
    },
    {
      title: 'my portfolio',
      description: 'The code for this portfolio',
      linkText: 'View on GitHub',
      link: 'https://github.com/DarkTroubadour1/online-portfolio',
      image: project2Image,
    },
  ]);

  const journals = journalsData;

  return (
    <>
        <Hero />
        <ProjectList projects={projects} />
        <JournalList journals={journals} />
    </>
  );
}

export default MainPage;
