import { getAll }  from '../../models/userModel.js'

const allUsers = async (req, res) => {

    // const users = await getAll()
    const users = []
    
    res.json({ users }) 
}

export default allUsers