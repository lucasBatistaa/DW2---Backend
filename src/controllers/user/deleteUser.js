import { remove } from '../../models/userModel.js'

const deleteUser = async (req, res) => {
    const { id } = req.params

    const userRemoved = await remove(+id) 

    if (userRemoved) {
        res.status(200).json({
            message: 'User removed with sucess!'
        })
    }

    res.status(404).json({
        message: 'User not found.'
    })

}

export default deleteUser