import express from 'express';
import validate from '../middleware/validate';
import { parkSchema ,parkSchemaType } from '../zod_schema/park-schema';

const router = express.Router();
const ride : parkSchemaType[] =[];

router.get('/', (req, res, next) => {
    return res.json(ride);
  });

router.post('/', validate(parkSchema), (req, res, next) => {
    const newride = req.body as parkSchemaType;
    ride.push(newride);
    return res.status(201).json({ message: 'Ride Ticket Added !' });
  });

router.put('/', validate(parkSchema), (req, res, next) => {
    let updated = req.body as parkSchemaType;
    let rID = req.params.id;
    for (let i=0; i<ride.length; i++){
      if(ride[i].id == rID){
        ride[i]=updated
      }
    }
    return res.json({
      message: 'Ride Ticket Updated!',
    });
});

router.delete('/', validate(parkSchema), (req, res, next) => {
    const rID = req.params.id;
    for (let i=0; i<ride.length; i++){
      if(ride[i].id==rID){
        ride.splice(i, 1);
      }
    }
    return res.json({
      message: 'Ride Ticket deleted!'
    })
});



  export default router;