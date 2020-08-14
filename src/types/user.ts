export type User = {
  _id?: string;
  googleid: string;
  name: string;
  profileUrl: string;
  email: string;
  canFeedback: boolean;
  canEditCourse: boolean;
  isAdmin: boolean;
};
