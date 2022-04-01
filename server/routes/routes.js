import express from 'express';
import Makeup from '../controllers/makeup';
import asyncHelper from "./../utils/asynHerlper";

const router = express.Router();

router.route("/makeup").get(asyncHelper(Makeup.getRequests));
router.route("/makeup/:id").get(asyncHelper(Makeup.getSingleRequests));

  

export default router;
