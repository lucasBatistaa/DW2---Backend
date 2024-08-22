import { getAll }  from '../../models/userModel.js'

const allUsers = async (req, res) => {

    const users = await getAll()
    
    res.json({ users }) 
}

export default allUsers