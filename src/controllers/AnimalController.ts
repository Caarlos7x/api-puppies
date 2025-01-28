import { Request, Response } from "express";
import { animalSchema } from "../validations/animalValidation";
import db from "../database/connections";
import { v4 as uuidv4 } from "uuid";

export class AnimalController {

  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const animals = await db('animals').select('*');
      return res.json(animals);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao listar animais' });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const animal = await db('animals').where({ id }).first();
      if (!animal) return res.status(404).json({ error: 'Animal não encontrado' });
      return res.json(animal);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao obter animal' });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const validation = animalSchema.safeParse(req.body);
  
      if (!validation.success) {
        return res.status(400).json({ error: validation.error.format() });
      }
  
      const newAnimal = {
        id: uuidv4(),
        ...validation.data,
        created_at: new Date().toISOString(),
      };
  
      await db('animals').insert(newAnimal);
  
      return res.status(201).json(newAnimal);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao criar animal';
      return res.status(400).json({ error: errorMessage });
    }
  }
  

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const validateData = animalSchema.parse(req.body);

      const animal = await db('animals').where({ id }).first();
      if (!animal) return res.status(404).json({ error: 'Animal não encontrado' });

      await db('animals').where({ id }).update(validateData);
      return res.json({ id, ...validateData });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao atualizar animal';
      return res.status(400).json({ error: errorMessage });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const animal = await db('animals').where({ id }).first();
      if (!animal) return res.status(404).json({ error: 'Animal não encontrado' });

      await db('animals').where({ id }).delete();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao deletar animal' });
    }
  }
}