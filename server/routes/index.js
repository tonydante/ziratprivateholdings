import express from 'express';
import { Users, Admins, Accounts } from '../controllers';
import validateInput from '../utils/validateInput';
import jwtVerify from '../utils/jwtVerify';

const router = express.Router();

router.post('/users/signup', validateInput.signupInput, Users.signup);
router.post('/users/signin', validateInput.signInInput, Users.signin);
router.get('/users/transactions', jwtVerify.verifyToken, Users.getTransationDetails);
router.get('/users/useraccountdetails', jwtVerify.verifyToken, Users.getUserDetails);
router.post('/users/update', jwtVerify.verifyToken, Users.updateUser);
router.post('/users/transfer', jwtVerify.verifyToken, Accounts.transfer);

router.post('/admins/signin', validateInput.adminInput, Admins.adminSignin);
router.post('/admins/signup', validateInput.adminInput, Admins.adminSignup);
router.get('/admins/clients', jwtVerify.verifyToken, Admins.getAllUsers);
router.get('/admins/client', jwtVerify.verifyToken, Admins.getOneUser);
router.put('/admins/client', jwtVerify.verifyToken, Users.updateUser);
router.put('/admins/client/updateusertoken', jwtVerify.verifyToken, Users.updateUser);
router.delete('/admins/client', jwtVerify.verifyToken, Admins.deleteUser);

export default router;
