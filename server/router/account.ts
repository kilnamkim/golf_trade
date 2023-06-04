import { Router } from "express";

const router = Router()

let users = [
    {
        id: "hello",
        password: "1234",
    },
    {
        id: "world",
        password: "1234",
    },
];

const findUserIndex = (id: string) => {
    let index = -1;
    let len = users.length;

    for (let i = 0; i < len; i++) {
        if (users[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
};

const register = (id: any, password: any) => {
    let index = findUserIndex(id);
    if (index !== -1) return false;

    users.push({ id, password });
    return true;
};

const login = (id: string, password: string) => {
    let index = findUserIndex(id);
    if (index === -1) return false;

    if (users[index].id === id && users[index].password === password)
        return true;

    return false;
};

const changePassword = (id: string, password: string) => {
    let index = findUserIndex(id);
    if (index === -1) return false;

    users[index].password = password;
    return true;
};

const deleteUser = (id: string) => {
    let index = findUserIndex(id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
};

router.post("/", (req, res) => {
    let id = req.body.id;
    let password = req.body.password;

    if (!register(id, password)) return res.status(401).send("duplicate id");
    res.send(`success to register ${id}'s account`);
});

router.get("/", (req, res) => {
    res.send(JSON.stringify(users, null, 2));
});

router.get("/:id", (req, res) => {
    let id = req.params.id;

    if (findUserIndex(id) === -1) return res.status(401).send("invalid id");

    res.send(`Hello world ${id}`);
});

router.put("/:id", (req, res) => {
    let id = req.params.id;
    let password = req.body.password;

    if (!changePassword(id, password))
        return res.status(401).send("password change fail");
    res.send(`success to change ${id}'s password`);
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;

    if (!deleteUser(id)) return res.status(401).send("delete fail");
    res.send(`success to delete ${id}'s account`);
});

router.post("/login", (req, res) => {
    let id = req.body.id;
    let password = req.body.password;

    if (!login(id, password)) return res.status(401).send("login fail");

    res.send("hello " + id);
});

export default router