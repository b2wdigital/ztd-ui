import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { ButtonStyle } from './styles';
import api from '../../../services/api';
import { useAuth } from '../../../contexts/auth';

type Inputs = {
  gradeFeedback: number;
  positive: string;
  negative: string;
};

type FormFeedback = {
  idCourse: string;
};

const FeedbackForm: React.FC<FormFeedback> = ({ idCourse }) => {
  const { user } = useAuth();

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = handleSubmit(({ gradeFeedback, positive, negative }) => {
    const createFeedback = async () => {
      try {
        const { data } = await api.post('/feedbacks', {
          id_user: user?._id,
          id_course: idCourse,
          grade: gradeFeedback,
          positiveFeedback: positive,
          negativeFeedback: negative,
        });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    createFeedback();
    alert('Feedback Dado!');
  });
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="exampleSelect">Nota</Label>
        <Input
          type="select"
          name="gradeFeedback"
          id="grade"
          innerRef={register({ required: true })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">O que você mais gostou? :)</Label>
        <Input
          type="textarea"
          name="positive"
          id="positive"
          innerRef={register({ required: true })}
        />
        {errors.positive && <span>Esse campo é obrigatório!</span>}
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">O que pode melhorar?</Label>
        <Input
          type="textarea"
          name="negative"
          id="negative"
          innerRef={register({ required: true })}
        />
        {errors.negative && <span>Esse campo é obrigatório!</span>}
      </FormGroup>
      <ButtonStyle>
        <Button style={{ background: '#fa573c' }}>Submit</Button>
      </ButtonStyle>
    </Form>
  );
};

export default FeedbackForm;
