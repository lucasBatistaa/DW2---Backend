import { updateName } from '../../models/userModel.js'

const changeNameUser = async (req, res) => {
    const { id } = parseInt(req.params)
    const { name } = req.body

    const user = { id, name }

    console.log(user)

    try {
        if (!id || !name) {
            console.log('aq')
            const result = await updateName(user)

            if (result.user) {
                return res.status(200).json({
                    user: result.user,
                    message: result,
                })
            } else {
                return res.status(404).json({
                    message: result
                })
            }
        } else {
            return res.status(400).json({
                message: 'Necessary the params id and name!'
            })
        }
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

export default changeNameUser