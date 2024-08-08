import express from 'express'

import userById from '../controllers/user/userById.js'
import allUsers from '../controllers/user/allUsers.js'
import createUser from '../controllers/user/allUsers.js'
import editUser from '../controllers/user/editUser.js'
import changeNameUser from '../controllers/user/changeNameUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/', userById)
router.get('/all', allUsers)

router.post('/create', createUser)

router.put('/edit', editUser)

router.patch('/changeName', changeNameUser)

router.delete('/delete', deleteUser)


export default router