import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { ButtonStyle } from './styles';
import api from '../../../services/api';

type Inputs = {
  courseName: string;
  courseUrlDoc: string[];
  courseExtra: string;
  courseGoals: string;
  courseTopicCovered: string;
  courseInstructorsId: string[];
};

const CourseForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = handleSubmit(
    ({
      courseName,
      courseUrlDoc,
      courseExtra,
      courseGoals,
      courseTopicCovered,
      courseInstructorsId,
    }) => {
      const createFeedback = async () => {
        try {
          const { data } = await api.post('/courses', {
            name: courseName,
            urlDoc: courseUrlDoc,
            extra: courseExtra,
            goals: courseGoals,
            topicsCovered: courseTopicCovered,
            instructors_id: [
              '5ecb3a5d4837d9422823ef57',
              '5ecd6c7061d3a232783e986e',
            ],
          });
          console.log(data);
        } catch (e) {
          console.error('Erro!!', e);
        }
        alert('Aula Criada 🤓 ');
      };
      createFeedback();
    },
  );
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="NomeCurso">Nome da Aula</Label>
        <Input
          name="courseName"
          id="courseName"
          placeholder="Digite o nome da Aula"
          innerRef={register({ required: true })}
        />
        {errors.courseName && <span>O nome é obrigatório!</span>}
      </FormGroup>
      <FormGroup>
        <Label for="UrlDoc">Link Drive</Label>
        <Input
          name="courseUrlDoc"
          id="courseUrlDoc"
          placeholder="Digite o link do drive"
          innerRef={register}
        />
      </FormGroup>
      <FormGroup>
        <Label for="courseGoals">Objetivos</Label>
        <Input
          type="textarea"
          name="courseGoals"
          id="courseGoals"
          placeholder="Digite os objetivos do curso"
          innerRef={register}
        />
      </FormGroup>
      <FormGroup>
        <Label for="courseTopicCovered">Tópicos a Serem Abordados</Label>
        <Input
          type="textarea"
          name="courseTopicCovered"
          id="courseTopicCovered"
          placeholder="Digite os tópicos a serem abordados"
          innerRef={register}
        />
      </FormGroup>
      <FormGroup>
        <Label for="courseExtra">Extra</Label>
        <Input
          type="textarea"
          name="courseExtra"
          id="courseExtra"
          placeholder="Digite alguns tópicos extras"
          innerRef={register}
        />
      </FormGroup>
      <ButtonStyle>
        <Button style={{ background: '#fa573c' }}>Submit</Button>
      </ButtonStyle>
    </Form>
  );
};

export default CourseForm;
