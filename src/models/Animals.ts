export interface Animal {
  id: string;
  name: string;
  type: 'canine' | 'feline';
  breed: string;
  age: string;
  weight: string;
  castred: boolean;
  photo?: string;
  created_at: Date;
}