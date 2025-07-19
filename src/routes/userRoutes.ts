// src/routes/user.routes.ts
import { Router } from 'express';
import { getUsers,createUser } from '../controllers/userController';
import authentication, { AuthenticatedReq, secret_key } from '../middleware/authMiddleware';
import { Request,Response } from 'express';
import jwt from "jsonwebtoken"
import { mockList } from '../mockData';
import middleware1 from '../middleware/middleware1';
import middleware2 from '../middleware/middleware2';
import middleware3 from '../middleware/middleware3';
import { registerUser } from '../controllers/joiUserController';
import validateRequest from '../middleware/validateRequest';
import { userSchema } from '../validation/userSchema';
import validateRegisterInput from '../controllers/validateRegisterInput';
import validateNumericQuery from '../controllers/validateNumericQuery';
import validateRegion from '../controllers/validateRegion';
import dynamicValidation from '../controllers/dynamicValidation';



const router = Router();


router.get('/mid',middleware1,middleware2,middleware3)

router.post('/register', dynamicValidation, registerUser);


router.get('/', getUsers);
router.get('/list', validateNumericQuery(['page', 'limit']), getUsers);

router.get('/secure-data', validateRegion, (req, res) => {
  res.json({ message: 'Access granted from an approved region.' });
});

router.post('/', createUser);
router.post('/register',validateRequest(userSchema),registerUser)
router.post('/validregister',validateRegisterInput,registerUser)
router.post('/addUser',(req:Request,res:Response)=>{
   const{id,name,role} = req.body;
   const newUser = {
    id,name,role,
   };
   if(id && name && role){
   console.log("calling new user",newUser)
   const token = jwt.sign(newUser,secret_key,{expiresIn:'1h'});
   mockList.push(newUser)
   res.json({token});
   }else{
    console.log("cannot set ");
   }

});
router.get("/getUsers",authentication,(req,res)=>
{
    res.status(200).json(mockList);
})

export default router;
