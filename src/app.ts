import express from 'express';
import parkRouter from './routes/park.route';
import { z } from 'zod'; 

const app = express();
app.use(express.json());

app.use('/api/v1/ticket', parkRouter);

app.listen(5000, () => {
    console.log('Server is running in port 5000');
  });