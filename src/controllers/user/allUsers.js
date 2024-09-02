import { getAll }  from '../../models/userModel.js'

const allUsers = async (req, res) => {

    const users = await getAll()
    
    res.status(200).json({ users }) 
}

export default allUsers