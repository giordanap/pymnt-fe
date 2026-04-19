export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
};

export type UsersResponse =
  | { ok: true; users: User[] }
  | { ok: false; error: string };
