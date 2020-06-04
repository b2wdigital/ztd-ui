import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import CourseDetail from '../views/Courses/Course';
import Courses from '../views/Courses';
import Feedbacks from '../views/Feedbacks';
import GivenFeedbacks from '../views/Feedbacks/Given';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/courses" component={Courses} />
    <Route path="/courses/:id" component={CourseDetail} />
    <Route exact path="/feedbacks" component={Feedbacks} />
    <Route path="/feedbacks/given" component={GivenFeedbacks} />
  </Switch>
);

export default Routes;
