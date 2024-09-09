import { updateName } from '../../models/userModel.js'

const changeNameUser = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const user = { id: parseInt(id), name }

    const userUpdated = await updateName(user)

    if (userUpdated) {
        return res.status(200).json({
            message: 'Name user updated with sucess!',
            user: userUpdated
        })
    }

    return res.status(401).json({
        message: 'Error to update the user!'
    })
}

export default changeNameUser