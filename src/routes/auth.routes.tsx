import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Feedback from '../pages/Feedbacks';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/Course';
import GivenFeedbacks from '../pages/GivenFeedbacks';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/courses" component={Courses} />
    <Route path="/courses/:id" component={CourseDetails} />
    <Route exact path="/feedbacks" component={Feedback} />
    <Route exact path="/feedbacks/given" component={GivenFeedbacks} />
  </Switch>
);

export default AuthRoutes;
