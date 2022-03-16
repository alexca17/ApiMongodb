const express = require("express");
const controller = require("../controllers/users");
//import { getUser, createUser, getUser, deleteUser, updateUser } from "../controlers/users";

const router = express.Router();

const path = "user";
const path2 = "users";
//const path2 = "/users";

router.get(`/${path2}`, controller.getUsers);
router.post(`/${path}`, controller.createUser);
router.get(`/${path}/:id`, controller.getUser);
router.put(`/${path}/:id`, controller.updateUser);
router.delete(`/${path}/:id`, controller.deleteUser);

module.exports = router;
