import { create, validateUserToCreate } from '../../models/userModel.js'

const createUser = async (req, res) => {
    try {
        const dataUser = req.body

        const userValidated = validateUserToCreate(dataUser)

        if (userValidated?.error) {
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: userValidated.error.flatten().fieldErrors
            })
        }

        const userCreated = await create(userValidated.data)

        if (!userCreated)
            return res.status(500).json({
                error: "Erro ao criar usuário"
            })

        return res.json({
            success: "Usuário criado com sucesso!",
            user: result
        })
    } catch (error) {
        console.log(error)
        if (error?.code === 'P2002')
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: { email: ['Email já cadastrado'] }
            })
        next(error)
    }
}

export default createUser