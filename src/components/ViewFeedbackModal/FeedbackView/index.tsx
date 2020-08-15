import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { ButtonStyle } from './styles';
import api from '../../../services/api';
import { useAuth } from '../../../contexts/auth';

type FormFeedback = {
  idCourse: string;
};

const FeedbackView: React.FC<FormFeedback> = ({ idCourse }) => {
  const { user } = useAuth();
  return <h1> view</h1>;
};

export default FeedbackView;
