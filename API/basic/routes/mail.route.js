const { Router } = require('express');
const router = Router();
const MailService = require('../services/mail.service');


router.post('/', async (req, res) => {


    const data = req.body;
    const send = await MailService.send(data.email, data.subject, data.content);
    if (send.error === false) {
        res.status(200).send("Mail send");
    } else {
        res.status(500).send("Mail not send");
    }
});

module.exports = router;