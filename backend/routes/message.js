import express from 'express';
const router = express.Router()
import Message from '../models/message.js'


router.post("/send/message", async(req, res) => {
    try {
        const { name, password } = req.body;
        await Message.create({ name, password })
        res.send({ message: 'We have received your message\n you will receive an email soon' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Some error occured!' });
    }
})

export default router