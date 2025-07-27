import { Router } from 'express';
import { UserController } from '../controllers/userController';
import authentication, { secret_key } from '../middleware/authMiddleware';
import { Request,Response } from 'express';
import jwt from "jsonwebtoken"
import { mockList } from '../mockData';
import middleware1 from '../middleware/middleware1';
import middleware2 from '../middleware/middleware2';
import middleware3 from '../middleware/middleware3';
import { AuthController } from '../controllers/joiUserController';
import validateRequest from '../middleware/validateRequest';
import { userSchema } from '../validation/userSchema';
import validateRegisterInput from '../controllers/validateRegisterInput';
import validateNumericQuery from '../controllers/validateNumericQuery';
import validateRegion from '../controllers/validateRegion';
import dynamicValidation from '../controllers/dynamicValidation';
import createError from 'http-errors'
import { ErrorTestController } from '../controllers/asynErrorUserHnadler';
import { UserValidationMiddleware } from '../controllers/validationUser';



const router = Router();

//Creation of object of usercontroller class
const userController = new UserController();

//calling get and post users from the object 
router.get('/', userController.getUsers.bind(userController));
router.get('/list', validateNumericQuery(['page', 'limit']), userController.getUsers.bind(userController));
router.post('/', userController.createUser.bind(userController));

//Creation of object of joiUserController 
const authController = new AuthController();

//calling authcontroller functions through the created objects 
router.post('/register', dynamicValidation, authController.registerUser.bind(authController));
router.post('/register',validateRequest(userSchema),authController.registerUser.bind(authController))
router.post('/validregister',validateRegisterInput,authController.registerUser.bind(authController))


router.get('/mid',middleware1,middleware2,middleware3)

//CReation of object of asynErrorHandler file class 
const errorTestController = new ErrorTestController();

//calling the functions through objects name 
router.get('/test/async-error', errorTestController.asyncFailingRoute.bind(errorTestController));


//CReation of Object for ValidationUser class
const validator = new UserValidationMiddleware();

//Using the function through objects name 
router.post('/validate', validator.validate.bind(validator));


router.get('/secure-data', validateRegion, (req, res) => {
  res.json({ message: 'Access granted from an approved region.' });
});



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

router.get('/test/400', (req, res, next) => {
  next(createError(400, 'Bad Request - Malformed input'));
});

router.get('/test/401', (req, res, next) => {
  next(createError(401, 'Unauthorized - No token provided'));
});

router.get('/test/403', (req, res, next) => {
  next(createError(403, 'Forbidden - Access denied'));
});

router.get('/test/404', (req, res, next) => {
  next(createError(404, 'Not Found - Resource does not exist'));
});

router.get('/test/409', (req, res, next) => {
  next(createError(409, 'Conflict - Duplicate resource'));
});

router.get('/test/422', (req, res, next) => {
  next(createError(422, 'Unprocessable Entity - Validation failed'));
});

router.get('/test/429', (req, res, next) => {
  next(createError(429, 'Too Many Requests - Rate limit exceeded'));
});

router.get('/test/500', (req, res, next) => {
  next(createError(500, 'Internal Server Error'));
});

router.get('/test/502', (req, res, next) => {
  next(createError(502, 'Bad Gateway'));
});

router.get('/test/503', (req, res, next) => {
  next(createError(503, 'Service Unavailable'));
});

export default router;
