import { create, validateUserToCreate } from '../../models/userModel.js'

const createUser = async (req, res) => {
    const dataUser = req.body

    const userValidated = validateUserToCreate(dataUser)

    if (userValidated?.error) {
        return res.status(400).json({
            error: "Erro ao criar usuário, verifique os dados!",
            fieldErrors: userValidated.error.flatten.fieldErrors
        })
    }

    const userCreated = await create(userValidated.data)

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