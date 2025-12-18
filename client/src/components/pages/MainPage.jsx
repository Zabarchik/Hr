import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';
import Card from '../Card';

export default function MainPage() {
  const [candidates, setCandidates] = useState([]);
  const [stages, setStages] = useState([]);

  useEffect(() => {
    axiosInstance.get('/candidates/').then((res) => setCandidates(res.data));
    axiosInstance.get('/stages/').then((res) => setStages(res.data));
  }, []);

  const candidatesByStages = {}



  return (
    <div 
      className="bg-white text-dark w-100" 
      style={{ minHeight: 'calc(100vh - 120px)' }}
    >
      {/* Container fluid растягивает контент на всю ширину */}
      <Container fluid className="px-3 mt-4">
        <div 
          style={{ 
            display: 'grid', 
            // repeat автоматически создает колонки равной ширины (1fr) 
            // в количестве, равном длине массива stages
            gridTemplateColumns: `repeat(${stages.length || 1}, 1fr)`, 
            gap: '15px', 
            alignItems: 'flex-start' 
          }}
        >
          {stages?.map((stage) => (
            <div 
              key={stage.id} 
              className="p-2 rounded shadow-sm" 
              style={{ backgroundColor: '#f4f5f7', minHeight: '70vh' }}
            >
              {/* Заголовок стадии */}
              <h6 className="text-center border-bottom pb-2 mb-3 text-uppercase font-weight-bold" style={{ fontSize: '0.85rem' }}>
                {stage.title}
              </h6>
              
              {/* Список кандидатов */}
              <div className="d-flex flex-column gap-2">
                {candidates
                  ?.filter((candidate) => 
                  candidate.Stages?.[candidate.Stages.length - 1]?.id === stage.id) 
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