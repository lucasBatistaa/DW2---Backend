import { create } from '../../models/userModel.js'

const createUser = async (req, res) => {
    const dataUser = req.body

    const userCreated = await create(dataUser)

    if (userCreated) {
        res.status(201).json({
            message: 'User created with sucess!',
            user: userCreated
        })
    } else {
        res.status(500).json({
            message: 'Error to create user!'
        })
    }
}

export default createUser