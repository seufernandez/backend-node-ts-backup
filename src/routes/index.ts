import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'FELIZ DIA DA TOALHA' }));

export default routes
