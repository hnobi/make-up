import express from 'express';
import Phones from '../controllers/makeup';
import asyncHelper from "./../utils/asynHerlper";

const router = express.Router();

router.route("/makeup").get(asyncHelper(Phones.getRequests));
  

export default router;
