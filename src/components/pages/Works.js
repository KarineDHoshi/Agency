import React, { useState } from 'react';
import platonImage from './img/platon.png';
import solaneImage from './img/solane.png';
import sedalImage from './img/sedal.png';

const Works = () => {
  const worksData = [
    {
      id: 'platon',
      title: 'Platon',
      description:
        'Le challenge\n\nPlaton a décidé de se lancer à l\'époque malgré une crise économique difficile.\n\nNous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.',
      image: platonImage,
    },
    {
      id: 'solane',
      title: 'Solane',
      description:
        'Solane est le premier vendeur de fraises du Poitou-Charentes\n\nEt c\'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.',
      image: solaneImage,
    },
    {
      id: 'sedal',
      title: 'Sedal',
      description:
        'Sedal, l\'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas\n\nMalgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l\'ont dit...',
      image: sedalImage,
    },
  ];

  const [selectedWork, setSelectedWork] = useState(null);

  const handleViewStudyCase = (workId) => {
    setSelectedWork((prevSelectedWork) => {
      if (prevSelectedWork === workId) {
        return null;
      }
      return workId;
    });
  };

  return (
    <div className="container">
      <h1 className="display-4">Works</h1>
      <div className="row">
        {worksData.map((work) => (
          <div key={work.id} className="col-md-4 mb-4">
            <div className={`work-card card ${selectedWork === work.id ? 'selected' : ''}`}>
              <h3 className="card-title text-center">{work.title}</h3>
              <div className="card-img-container">
                <img src={work.image} alt={work.title} className="card-img-top img-fluid" />
              </div>
              {selectedWork === work.id && (
                <>
                  <div className="card-body">
                    <p className="card-text">{work.description}</p>
                  </div>
                </>
              )}
              <button
                onClick={() => handleViewStudyCase(work.id)}
                className="btn btn-primary study-case-button"
              >
                View Study Case
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
