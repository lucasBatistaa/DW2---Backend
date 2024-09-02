import { update } from '../../models/userModel.js'

const changeNameUser = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const user = { id: +id, name }

    const userUpdated = await update(user)

    if (userUpdated) {
        res.status(200).json({
            message: 'Name user updated with sucess!',
            user: userUpdated
        })
    }

    res.status(401).json({
        message: 'Error to update the user!'
    })
}

export default changeNameUser