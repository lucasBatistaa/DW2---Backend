import { remove } from '../../models/userModel.js'

const deleteUser = async (req, res) => {
    try {
        const { id } = parseInt(req.params)
        const userRemoved = await remove(id) 

        return res.status(200).json({
            message: 'User removed with sucess!'
        })

    } catch (error) {

        if (error?.code === 'P2025') {
            return res.status(404).json({
                message: 'User not found.'
            })
        }

        return res.status(500).json({
            message: 'Server error, try again!'
        })
    }
}

export default deleteUser