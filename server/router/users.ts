import {Router} from 'express'
import db from '../db';
const router = Router()

router.get("/list", async (req, res) => {
    const users = await db.users.findAll({})
    res.send(JSON.stringify(users, null, 2));
});

export default router