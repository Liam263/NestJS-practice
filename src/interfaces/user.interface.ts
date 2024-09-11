export interface User {
  name: string;
  password: string;
  role: 'User' | 'Admin';
  created_at: Date;
  updated_at: Date;
}
