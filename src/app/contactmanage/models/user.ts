import { Notes } from "./notes";

export class User {
  id: number;
  avatar: string;
  bio: string;
  birthDate: Date
  name: string;
  
  notes: Notes[] = [];
}
