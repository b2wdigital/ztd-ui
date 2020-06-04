import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import FeedbackModal from '../../components/FeedbackModal';
import { CourseCard, Title, Section, Header } from './styles';
import { Course } from '../../types/course';
import api from '../../services/api';

const Feedback: React.FC = () => {
  const [pendingFeedbackList, setFeedbackList] = useState<Course[]>([]);
  useEffect(() => {
    const listCourses = async () => {
      try {
        const { data } = await api.get(
          '/users/PendingFeedbacks/5ed30a2aa171ea2e0b25dc6a',
        );
        setFeedbackList(data);
      } catch (e) {
        console.error(e);
      }
    };
    listCourses();
  }, [pendingFeedbackList]);

  return (
    <>
      <Header>
        <Title> Feedbacks Pendentes </Title>
      </Header>
      <Section
        style={{
          display: 'grid',
          rowGap: '15px',
          paddingLeft: '20px',
        }}
      >
        {pendingFeedbackList.map((feedback) => (
          <CourseCard>
            <div className="textbox">
              <span>{feedback.name}</span>
              <FeedbackModal
                buttonLabel="Dar Feedback"
                className="Primary"
                course_id={feedback._id}
                course_name={feedback.name}
              />
            </div>
          </CourseCard>
        ))}
      </Section>
    </>
  );
};

export default Feedback;
