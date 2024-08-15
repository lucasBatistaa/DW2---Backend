import { getAll }  from '../../models/userModel.js'
const allUsers = (req, res) => {

    const users = getAll()

    if (users) {
        res.json({ users })
    }
    
    res.json({ message: 'users not found.' }) 
}

export default allUsers