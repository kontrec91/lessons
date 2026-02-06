export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type initialValuesType = {
  email: string;
  password: string;
};

export type errorsType = {
  email?: string;
  password?: string;
};
