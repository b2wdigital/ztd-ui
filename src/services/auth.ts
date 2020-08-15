import { User } from '../types/user';
import api from './api';

// Typescript
type Response = {
  token: string;
  user?: User;
};

export default async function login(): Promise<Response> {
  const { data } = await api.get('/auth/login/success', {
    params: {},
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    withCredentials: true,
  });
  console.log(data);
  if (data.user) {
    const { user }: { user: User } = data;
    const response = {
      token: data.cookies,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        googleid: user.googleid,
        profileUrl: user.profileUrl,
        isAdmin: true,
        canEditCourse: false,
        canFeedback: true,
      },
    };
    return response;
  }
  const response = {
    token: data.cookies,
  };
  return response;
}
