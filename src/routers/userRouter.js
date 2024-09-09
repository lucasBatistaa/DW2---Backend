import express from 'express'

import allUsers from '../controllers/user/allUsers.js'
import userById from '../controllers/user/userById.js'
import createUser from '../controllers/user/createUser.js'
import editUser from '../controllers/user/editUser.js'
import changeNameUser from '../controllers/user/changeNameUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/:id', userById)
router.get('/', allUsers)

router.post('/create', createUser)

router.put('/edit/:id', editUser)

router.patch('/changeName/:id', changeNameUser)

router.delete('/delete/:id', deleteUser)


export default router