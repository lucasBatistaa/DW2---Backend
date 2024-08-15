import { getAll }  from '../../models/userModel.js'

const allUsers = async (req, res) => {

    const users = await getAll()

    // if (users) {
    //     res.send(200).json({ users })
    // }
    
    res.json({ users }) 
}

export default allUsers