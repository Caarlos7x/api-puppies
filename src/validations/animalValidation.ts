import { z } from 'zod';

export const animalSchema = z.object({
  name: z.string().nonempty(),
  type: z.string().nonempty(),
  breed: z.string().nonempty(),
  age: z.union([z.number(), z.string()]).transform((val) => Number(val)), // Converte para número
  weight: z.union([z.number(), z.string()]).transform((val) => Number(val)), // Converte para número
  castred: z.boolean(),
  photo: z.string().optional(),
});

