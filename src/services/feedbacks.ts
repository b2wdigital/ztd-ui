import { User } from '../types/user';
import api from './api';

// Typescript
type Response = {
  token: string;
  user?: User;
};

export const getGivenFeedbacks = async (id: string) => {
  const { data } = await api.get(`/users/givenfeedbacks/${id}`);
  return data;
};

export const getFeedbacksbyUser = async () => {
  const { data } = await api.get('/feedbacks/by_user');
  return data;
};

export const getFeedbacksbyCourse = async () => {
  const { data } = await api.get('/feedbacks/by_course');
  return data;
};
