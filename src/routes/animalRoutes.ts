import { Router, Request, Response, NextFunction } from 'express';
import { AnimalController } from '../controllers/AnimalController';

const router = Router();
const controller = new AnimalController();

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};


router.get('/animals', asyncHandler(controller.list.bind(controller)));
router.get('/animals/:id', asyncHandler(controller.getById.bind(controller)));
router.post('/animals', asyncHandler(controller.create.bind(controller)));
router.put('/animals/:id', asyncHandler(controller.update.bind(controller)));
router.delete('/animals/:id', asyncHandler(controller.delete.bind(controller)));

export default router;