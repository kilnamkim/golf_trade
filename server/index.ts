import express, { Request, Response } from 'express'
import next from 'next';
import accountRouter from './router/account'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();



app.prepare().then(() => {
  const server = express();

  server.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello, API!' });
  });

  server.use('/api/account', accountRouter)

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
