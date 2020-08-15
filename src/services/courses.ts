import { User } from '../types/user';
import api from './api';

// Typescript
type Response = {
  token: string;
  user?: User;
};

export const getCourses = async () => {
  const { data } = await api.get('courses/');
  return data;
};
