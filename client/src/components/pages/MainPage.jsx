import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';
import Card from '../Card';
import '../pages/MainPage.css';

export default function MainPage() {
  const [candidates, setCandidates] = useState([]);
  const [stages, setStages] = useState([]);

  useEffect(() => {
    axiosInstance.get('/candidates/').then((res) => setCandidates(res.data));
    axiosInstance.get('/stages/').then((res) => setStages(res.data));
  }, []);

  const candidatesByStages = {};

  return (
    <div className="main-page">
      {/* Container fluid растягивает контент на всю ширину */}
      <Container fluid className="px-3 mt-4">
        <div
          className="main-board"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${stages.length || 1}, 1fr)`,
            gap: '15px',
            alignItems: 'flex-start',
          }}
        >
          {stages?.map((stage) => (
            <div key={stage.id} className="stage-column">
              {/* Заголовок стадии */}
              <h6 className="stage-header">{stage.title}</h6>

              {/* Список кандидатов */}
              <div className="stage-candidates">
                {candidates
                  ?.filter(
                    (candidate) => candidate.Stages?.[candidate.Stages.length - 1]?.id === stage.id,
                  )
                  .map((candidate) => (
                    <Card
                      key={candidate.id}
                      name={candidate.name}
                      surname={candidate.surname}
                      position={candidate.position}
                      phone={candidate.phone}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
