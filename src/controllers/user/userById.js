import { getById } from "../../models/userModel.js"

const userById = async (req, res) => {
    const { id } = req.params

    const userId = parseInt(id)

    const user = await getById(userId)

    if (user) {
        res.status(200).json({ user })
    } else {
        res.status(404).json({
            message: 'User not found.'
        })
    }


}

export default userById