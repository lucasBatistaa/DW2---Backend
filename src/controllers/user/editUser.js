import { update } from "../../models/userModel.js"

const editUser = async (req, res) => {
    const { id } = req.params
    const user = req.body

    user.id = +id

    const userEdited = await update(user)

    if (userEdited) {
        res.status(200).json({
            message: 'User updated with sucess!',
            user: userEdited
        })
    }

    res.status(401).json({
        message: 'Error to update the user!'
    })
}

export default editUser