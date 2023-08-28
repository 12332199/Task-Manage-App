const express = require('express')
const { createTask, getAllTask, deleteTask, sinTask, updateTask, markComplete } = require('../controllers/taskCtrl')
const { requireSignIn } = require('../middleware/userMdwr')

const router = express.Router()

router.post("/create-task",createTask)
router.get("/get-task",getAllTask)
router.get("/single-task/:id",sinTask)
router.put("/update-task/:id",updateTask)
router.delete("/delete-task/:id",deleteTask)
router.put("/completed-task/:id",markComplete)

module.exports = router