const express = require('express');
const { createUser, updateUserById, getUser, getUserById } = require('../service/user.service');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const data = await createUser(name, surname, email, password);
        res.status(200).send(data);

    } catch (er) {
        res.status(500).send(er.message);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const { id } = req.params;
        const data = await updateUserById(id, name, surname, email, password);
        res.status(201).send(data);
    } catch (er) {
        res.status(500).send(er.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const data = await getUser();
        res.status(200).send(data);
    } catch (er) {
        res.status(500).send(er.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        res.status(200).send(data);
    } catch (er) {
        res.status(500).send(er.message);
    }
});


module.exports = router