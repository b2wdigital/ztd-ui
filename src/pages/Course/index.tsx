import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardBody, Card } from 'reactstrap';
import Accordion from '../../components/Accordion';
import { CourseCard, Section, Header } from './styles';
import { Course } from '../../types/course';
import { User } from '../../types/user';
import api from '../../services/api';

type CourseDetailProps = {
  course: Course;
  _id: string;
  match: any;
  params: any;
  id: string;
};

// eslint-disable-next-line react/prop-types
const CourseDetail: React.FC<CourseDetailProps> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [course, setCourse] = useState<any>([]);
  const [instructors, setInstructors] = useState<any>([]);
  const idCourse = match.params.id;
  const inst: Array<string> = [];

  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await api.get(`/courses/${idCourse}`);
        setCourse(response.data);
      } catch (e) {
        console.error('falhou:', e);
      }
    };
    getCourse();
  }, [idCourse]);

  useEffect(() => {
    const getInstructor = () => {
      try {
        course.instructors_id.map(async (i: string) => {
          const { data } = await api.get(`/users/${i}`);
          inst.push(data.name);
        });
        setInstructors([inst]);
      } catch (e) {
        console.error('falhou:', e);
      }
    };
    getInstructor();
  }, [course.instructors_id]);

  return (
    <>
      <Header>
        <h1> {course.name} </h1>
      </Header>
      <Section>
        <div className="infos">
          <Accordion title="Instrutores" body={instructors} />
          <Accordion title="Docs" body={course.urlDoc} />
          <Accordion title="Extras" body={course.extra} />
        </div>
        <div className="notes">
          {' '}
          <Card>
            <h1> Objetivo </h1>
            <CardBody>{course.goals}</CardBody>
          </Card>
          <Card>
            <h1> Tópicos Abordados </h1>
            <CardBody>{course.topicsCovered}</CardBody>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default CourseDetail;
