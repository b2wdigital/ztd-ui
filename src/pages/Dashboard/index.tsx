import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBody,
} from 'reactstrap';
import { FeedbackCard, Title, Header } from './styles';
import { getCourses } from '../../services/courses';
import {
  getGivenFeedbacks,
  getFeedbacksbyUser,
  getFeedbacksbyCourse,
} from '../../services/feedbacks';
import { Course } from '../../types/course';
import { useAuth } from '../../contexts/auth';
import ViewFeedbacksModal from '../../components/ViewFeedbacksModal';
import ViewUsersModal from '../../components/ViewUsersModal ';
import { User } from '../../types/user';

type dataFeedbackByUser = {
  _id: User[];
  courses: Course[];
  count: number;
};

type dataFeedbackByCourse = {
  _id: Course[];
  grades: number[];
  positiveFeedbacks: string[];
  negativeFeedbacks: string[];
};

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [courseNumber, setCourseNumber] = useState(0);
  const [givenFeedbacks, setGivenFeedbacks] = useState(0);
  const [givenFeedbacksByUser, setGivenFeedbacksByUser] = useState<
    dataFeedbackByUser[]
  >([]);
  const [givenFeedbacksByCourse, setGivenFeedbacksByCourse] = useState<
    dataFeedbackByCourse[]
  >([]);

  const getCourse = async () => {
    const courseResponse: Course[] = await getCourses();
    setCourseNumber(courseResponse.length);
  };

  const getGiven = async () => {
    if (user?._id) {
      const data = await getGivenFeedbacks(user?._id);
      setGivenFeedbacks(data.length);
    }
  };

  const getByUser = async () => {
    const courseResponse: dataFeedbackByCourse[] = await getFeedbacksbyCourse();

    setGivenFeedbacksByCourse(courseResponse);
  };

  const getByCourse = async () => {
    const dataFeedbackByUser: dataFeedbackByUser[] = await getFeedbacksbyUser();
    setGivenFeedbacksByUser(dataFeedbackByUser);
  };

  useEffect(() => {
    const setInfos = () => {
      try {
        getCourses();
        getGiven();
        getByUser();
        getByCourse();
      } catch (e) {
        console.error(e);
      }
    };
    setInfos();
  }, []);

  getCourse();
  return (
    <>
      <Header>
        <Title>Dashboard</Title>
      </Header>
      <div style={{ padding: '30px' }}>
        <Row style={{ margin: '10px' }}>
          <Card body>
            <CardTitle>Feedback Status</CardTitle>
            <CardText>
              {givenFeedbacks}/{courseNumber}
            </CardText>
          </Card>
        </Row>
        <Row style={{ margin: '10px' }}>
          <Card body>
            <CardTitle>Feedbacks por Cursos</CardTitle>
            <CardBody>
              {givenFeedbacksByCourse.map((f) => (
                <FeedbackCard>
                  <div className="textbox">
                    <span>{f._id[0].name}</span>
                    <ViewFeedbacksModal
                      buttonLabel="Feedback Dado"
                      className="info"
                      grade={f.grades}
                      positiveFeedbacks={f.positiveFeedbacks}
                      negativeFeedbacks={f.negativeFeedbacks}
                    />
                  </div>
                </FeedbackCard>
              ))}
            </CardBody>
          </Card>
        </Row>
        <Row style={{ margin: '10px' }}>
          <Card body>
            <CardTitle>Feedbacks por Usuários</CardTitle>
            <CardBody>
              {givenFeedbacksByUser.map((c) =>
                c._id[0].canEditCourse ? (
                  ''
                ) : (
                  <FeedbackCard>
                    <div className="textbox">
                      <span>{c._id[0].name}</span>

                      <ViewUsersModal
                        buttonLabel={c.count.toString()}
                        className="info"
                        courses={c.courses}
                      />
                    </div>
                  </FeedbackCard>
                ),
              )}
            </CardBody>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
