import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { CourseCard, Title, Section, Header } from './styles';
import { Course } from '../../types/course';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

const Feedback: React.FC = () => {
  const { user } = useAuth();
  const [givingFeedbackList, setFeedbackList] = useState<Course[]>([]);

  useEffect(() => {
    const listCourses = async () => {
      try {
        const { data } = await api.get(`/users/givenfeedbacks/${user?._id}`);
        setFeedbackList(data);
      } catch (e) {
        console.error(e);
      }
    };
    listCourses();
  }, []);

  return (
    <>
      <Header>
        <Title> Feedbacks por Usuário </Title>
      </Header>
      <Section
        style={{
          display: 'grid',
          rowGap: '15px',
          paddingLeft: '20px',
        }}
      >
        {givingFeedbackList.map((feedback) => (
          <CourseCard>
            <div className="textbox">
              <span>{feedback.name}</span>
            </div>
          </CourseCard>
        ))}
      </Section>
    </>
  );
};

export default Feedback;
