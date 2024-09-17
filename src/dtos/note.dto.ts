export class CreateNoteDTO {
  name: string;
  description: string;
}

export class UserDTO {
  name: string;
  password: string;
  role: 'User' | 'Admin';
}
