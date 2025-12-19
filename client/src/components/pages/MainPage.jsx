import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
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

  return (
    <div className="main-page">
      <div className="main-board">
        {stages?.map((stage) => (
          <div key={stage.id} className="stage-column">
            <div className="stage-header">
              {stage.title}
              <Button variant="success">
                {candidates?.filter((c) => c.Stages?.[c.Stages.length - 1]?.id === stage.id).length}
              </Button>
              
            </div>

            <div className="stage-candidates">
              {candidates
                ?.filter((c) => c.Stages?.[c.Stages.length - 1]?.id === stage.id)
                .map((candidate) => (
                  <Card
                    key={candidate.id}
                    {...candidate} 
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
