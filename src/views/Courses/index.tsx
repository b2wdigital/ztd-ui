import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import { CourseCard, Title, Section, Header } from './styles';
import { Course } from '../../types/course';
import CourseModal from '../../components/CourseModal';
import api from '../../services/api';

const Courses: React.FC = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);

  useEffect(() => {
    const listCourses = async () => {
      try {
        const { data } = await api.get('/courses');
        setCourseList(data);
      } catch (e) {
        console.error(e);
      }
    };
    listCourses();
  }, [courseList]);

  return (
    <>
      <Header>
        <Title> Aulas </Title>
        <CourseModal buttonLabel="Nova Aula" className="secondary" />
      </Header>
      <Section>
        {courseList.map((course) => (
          <Link to={`/courses/${course._id}`}>
            <CourseCard key={course._id}>
              <div className="textbox">
                <h1>{course.name}</h1>
              </div>
            </CourseCard>
          </Link>
        ))}
      </Section>
    </>
  );
};

export default Courses;
